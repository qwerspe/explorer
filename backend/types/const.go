package types

var (
	Transfer        = "Transfer"
	DeclarationList = []string{"CreateValidator", "EditValidator"}
	StakeList       = []string{"Delegate", "BeginRedelegation", "CompleteRedelegation", "BeginUnbonding", "CompleteUnbonding"}
	GovernanceList  = []string{"SubmitProposal", "Deposit", "Vote"}
)

func isDeclarationType(typ string) bool {
	if len(typ) == 0 {
		return false
	}
	for _, t := range DeclarationList {
		if t == typ {
			return true
		}
	}
	return false
}

func isStakeType(typ string) bool {
	if len(typ) == 0 {
		return false
	}
	for _, t := range StakeList {
		if t == typ {
			return true
		}
	}
	return false
}

func isGovernanceType(typ string) bool {
	if len(typ) == 0 {
		return false
	}
	for _, t := range GovernanceList {
		if t == typ {
			return true
		}
	}
	return false
}

type TxType int

const (
	_ TxType = iota
	Trans
	Declaration
	Stake
	Gov
)

func Convert(typ string) TxType {
	if typ == Transfer {
		return Trans
	} else if isStakeType(typ) {
		return Stake
	} else if isDeclarationType(typ) {
		return Declaration
	} else if isGovernanceType(typ) {
		return Gov
	}
	panic("invalid tx type")
}