package task

import (
	"fmt"
	"time"

	"github.com/irisnet/explorer/backend/logger"
	"github.com/irisnet/explorer/backend/orm/document"
	"github.com/irisnet/explorer/backend/utils"
	"github.com/robfig/cron/v3"
	"github.com/irisnet/explorer/backend/conf"
	"github.com/irisnet/explorer/backend/types"
	"sync"
	"encoding/json"
)

var (
	engine = Engine{
		task: []TimerTask{},
	}

	taskControlModel document.TaskControl
	tcService        TaskControlService

	cstZone = time.FixedZone("CST", 8*3600)
	// adapt multiple asset
	rewardsDenom = []string{"iris-atto"}
)

func init() {
	engine.AppendTask(UpdateValidator{})
	engine.AppendTask(UpdateGovParams{})
	engine.AppendTask(UpdateValidatorIcons{})
	engine.AppendTask(UpdateAssetTokens{})
	engine.AppendTask(ValidatorStaticInfo{})
	engine.AppendTask(UpdateProposalVoters{})
	engine.AppendTask(UpdateAccount{})

	taskControlMonitor := TaskControlMonitor{}
	taskControlMonitor.unlockAllTasks()
	engine.AppendTask(taskControlMonitor)
}

type TimerTask interface {
	Start()
	Name() string
	DoTask() error
}

type Engine struct {
	task []TimerTask
}

func (e *Engine) Start() {
	if len(e.task) == 0 {
		return
	}
	for _, t := range e.task {
		var taskId = fmt.Sprintf("%s[%s]", t.Name(), utils.FmtTime(time.Now(), utils.DateFmtYYYYMMDD))
		logger.Info("timerTask begin to work", logger.String("taskId", taskId))
		go t.Start()
	}
}

func (e *Engine) AppendTask(task TimerTask) {
	e.task = append(e.task, task)
}

func Start() {
	engine.Start()

	// tasks manager by cron job
	c := cron.New(cron.WithLocation(cstZone))
	c.Start()

	txNumTask := TxNumGroupByDayTask{}
	txNumTask.init()
	c.AddFunc("01 0 * * *", func() {
		txNumTask.Start()
		new(UpdateValidatorIcons).Start()
	})
	c.AddFunc(conf.Get().Server.CronTimeFormatStaticDay, func() {
		new(StaticDelegatorTask).Start()
		new(StaticValidatorTask).Start()
	})

	c.AddFunc(conf.Get().Server.CronTimeFormatStaticMonth, func() { //每月1号0点0分
		delegatortask := new(StaticDelegatorByMonthTask)
		validatortask := new(StaticValidatorByMonthTask)
		startTime := conf.Get().Server.CaculateStartDate
		endTime := conf.Get().Server.CaculateEndDate
		if startTime != "" && endTime != "" {
			starttime, err := time.ParseInLocation(types.TimeLayout, startTime, cstZone)
			if err != nil {
				panic(fmt.Sprintf("time format [%v] is error:%v", startTime, err.Error()))
			}
			endtime, err := time.ParseInLocation(types.TimeLayout, endTime, cstZone)
			if err != nil {
				panic(fmt.Sprintf("time format [%v] is error:%v", endTime, err.Error()))
			}
			delegatortask.SetCaculateScope(starttime, endtime)
			validatortask.SetCaculateScope(starttime, endtime)
		}
		waitDelegatortaskDone := sync.WaitGroup{}
		waitDelegatortaskDone.Add(1)
		go func() {
			delegatortask.Start()
			waitDelegatortaskDone.Done()
		}()
		waitDelegatortaskDone.Wait()
		bytedata, _ := json.Marshal(delegatortask.AddressCoin)
		bytedata1, _ := json.Marshal(delegatortask.AddrPeriodCommission)
		bytedata2, _ := json.Marshal(delegatortask.AddrTerminalCommission)
		logger.Warn(fmt.Sprintf("AddressCoin:%v", string(bytedata)))
		logger.Warn(fmt.Sprintf("AddrPeriodCommission:%v", string(bytedata1)))
		logger.Warn(fmt.Sprintf("AddrTerminalCommission:%v", string(bytedata2)))
		validatortask.SetAddressCoinMapData(delegatortask.AddressCoin, delegatortask.AddrPeriodCommission, delegatortask.AddrTerminalCommission)
		validatortask.Start()
	})
}
