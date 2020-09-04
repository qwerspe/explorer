import store from "../store";
const PREFIX = ">";
const SUFFIX = "ago";
const TxType = {};
TxType.TRANSFER = 'Transfer';
TxType.BURN = 'Burn';
TxType.SETMEMOREGEXP = 'SetMemoRegexp';
TxType.CREATEVALIDATOR ='CreateValidator';
TxType.EDITVALIDATOR = 'EditValidator';
TxType.UNJAIL = 'Unjail';
TxType.DELEGATE = 'Delegate';
TxType.BEGINREDELEGATE = 'BeginRedelegate';
TxType.SETWITHDRAWADDRESS = 'SetWithdrawAddress';
TxType.BEGINUNBONDING = 'BeginUnbonding';
TxType.WITHDRAWDELEGATORREWARD = 'WithdrawDelegatorReward';
TxType.WITHDRAWDELEGATORREWARDSALL = 'WithdrawDelegatorRewardsAll';
TxType.WITHDRAWVALIDATORREWARDSALL = 'WithdrawValidatorRewardsAll';
TxType.SUBMITPROPOSAL = 'SubmitProposal';
TxType.DEPOSIT = 'Deposit';
TxType.VOTE = 'Vote';
TxType.ISSUETOKEN = 'IssueToken';
TxType.EDITTOKEN = 'EditToken';
TxType.MINTTOKEN = 'MintToken';
TxType.TRANSFERTOKENOWNER = 'TransferTokenOwner';
TxType.CREATEGATEWAY = 'CreateGateway';
TxType.EDITGATEWAY = 'EditGateway';
TxType.TRANSFERGATEWAYOWNER = 'TransferGatewayOwner';
TxType.REQUESTRAND = 'RequestRand';
TxType.ADDPROFILER = 'AddProfiler';
TxType.ADDTRUSTEE = 'AddTrustee';
TxType.DELETEPROFILER = 'DeleteProfiler';
TxType.DELETETRUSTEE = 'DeleteTrustee';
TxType.CLAIMHTLC = 'ClaimHTLC';
TxType.CREATEHTLC = 'CreateHTLC';
TxType.REFUNDHTLC = 'RefundHTLC';
TxType.ADDLIQUIDITY = 'AddLiquidity';
TxType.REMOVELIQUIDITY = 'RemoveLiquidity';
TxType.SWAPORDER = 'SwapOrder';
TxType.TRANSFERS = 'Transfers';
TxType.WITHDRAWADDRESS = 'WithdrawAddress';
TxType.STAKES = 'Stakes';
TxType.GOVERNANCE = 'Governance';
TxType.DECLARATIONS = 'Declarations';

TxType.SEND = 'Send';
TxType.CREATE_RECORD = 'CreateRecord';
TxType.BURN_NFT = 'BurnNft';
TxType.TRANSFER_NFT = 'TransferNft';
TxType.EDIT_NFT = 'EditNft';
TxType.ISSUE_DENOM = 'IssueDenom';
TxType.MINT_NFT = 'MintNft';
TxType.FundCommunityPool = 'FundCommunityPool';
TxType.WithdrawValidatorCommission = 'WithdrawValidatorCommission';

//service type txs
TxType.DEFINE_SERVICE = 'DefineService';
TxType.BIND_SERVICE = 'BindService';
TxType.UPDATE_SERVICE_BINDING = 'UpdateServiceBinding';
TxType.SERVICE_SET_WITHDRAW_ADDRESS = 'service/SetWithdrawAddress';
TxType.DISABLE_SERVICE_BINDING = 'DisableServiceBinding';
TxType.ENABLE_SERVICE_BINDING = 'EnableServiceBinding';
TxType.REFUND_SERVICE_DEPOSIT = 'RefundServiceDeposit';
TxType.CALL_SERVICE = 'CallService';
TxType.RESPOND_SERVICE = 'RespondService';
TxType.PAUSE_REQUEST_CONTEXT = 'PauseRequestContext';
TxType.START_REQUEST_CONTEXT = 'StartRequestContext';
TxType.KILL_REQUEST_CONTEXT = 'KillRequestContext';
TxType.UPDATE_REQUEST_CONTEXT = 'UpdateRequestContext';
TxType.WITHDRAW_EARNED_FEES = 'WithdrawEarnedFees';


//nft type of txs
TxType.ISSUE_DENOM = 'IssueDenom';
TxType.EDIT_NFT = 'NFTEdit';
TxType.TRANSFER_NFT = 'NFTTransfer';
TxType.MINT_NFT = 'NFTMint';
TxType.BURN_NFT = 'NFTBurn';



//oracle type of txs
TxType.CREATE_FEED = 'CreateFeed';
TxType.START_FEED = 'StartFeed';
TxType.PAUSE_FEED = 'PauseFeed';
TxType.EDIT_FEED = 'EditFeed';


TxType.VERIFY_INVARIANT = 'VerifyInvariant';



const EventType = {}

EventType.BEGINREDELEGATE = 'redelegate';
EventType.BEGINUNBONDING = 'unbond';
EventType.WITHDRAW_REWARDS = 'withdraw_rewards';
EventType.REQUEST_RAND = 'request_rand';


const ValidatorStatus = {};
ValidatorStatus.ACTIVE = 'active';
ValidatorStatus.JAILED = 'jailed';
ValidatorStatus.CANDIDATES = 'candidates';
ValidatorStatus.UNBONDED = 'Unbonded';
ValidatorStatus.UNBONDING = 'Unbonding';
ValidatorStatus.UNBONDED = 'Bonded';

const Denom = {};
Denom.IRISATTO = store.state.nativeToken;
Denom.IRIS = store.state.displayToken;
const ENVCONFIG = {};
ENVCONFIG.DEV = 'dev';
ENVCONFIG.QA = 'qa';
ENVCONFIG.STAGE = 'stage';
ENVCONFIG.TESTNET = 'testnet';
ENVCONFIG.MAINNET = 'mainnet';

const PARAMETER = {};
PARAMETER.EQUAL = 'eq';
PARAMETER.UNEQUAL = 'neq';

const CHAINNAME = 'iris';
const CHAINID = {};
CHAINID.IRISHUB = 'irishub';
CHAINID.FUXI = 'fuxi';
CHAINID.NYANCAT = 'nyancat';
CHAINID.BIFROST = 'bifrost';
CHAINID.QA = 'rainbow-qa';
CHAINID.DEV = 'rainbow-dev';
CHAINID.GOZTESTNET = 'goz-testnet';



const RADIXDENOM = {};

RADIXDENOM.IRISATTO = store.displayToken;
RADIXDENOM.IRISATTONUMBER = '1000000000000000000';
RADIXDENOM.IRISMILLI = 'iris-milli';
RADIXDENOM.IRISMILLINUMBER = '1000000000000000';
RADIXDENOM.IRISMICRO = 'iris-micro';
RADIXDENOM.IRISMICRONUMBER = '1000000000000';
RADIXDENOM.IRISNANO = 'iris-nano';
RADIXDENOM.IRISNANONUMBER = '1000000000';
RADIXDENOM.IRISPICO = 'iris-pico';
RADIXDENOM.IRISPICONUMBER = '1000000';
RADIXDENOM.IRISFEMTO = 'iris-femto';
RADIXDENOM.IRISFEMTONUMBER = '1000';
RADIXDENOM.UIRIS = 'uiris';
RADIXDENOM.UIRISNUMBER = '100000';
RADIXDENOM.IRIS = store.nativeToken;
RADIXDENOM.IRISNUMBER = '1';

const TRANSACTIONMESSAGENAME = {};
TRANSACTIONMESSAGENAME.TXTYPE = 'TxType :';
TRANSACTIONMESSAGENAME.FROM = 'From :';
TRANSACTIONMESSAGENAME.AMOUNT = 'Amount :';
TRANSACTIONMESSAGENAME.TO = 'To :';
TRANSACTIONMESSAGENAME.OWNER = 'Owner :';
TRANSACTIONMESSAGENAME.MEMOREGEXP = 'MemoRegexp :';
TRANSACTIONMESSAGENAME.OPERATORADDRESS = 'Operator Address :';
TRANSACTIONMESSAGENAME.MONIKER = 'Moniker :';
TRANSACTIONMESSAGENAME.IDENTITY = 'Identity :';
TRANSACTIONMESSAGENAME.SELFBONDED = 'Self-Bonded :';
TRANSACTIONMESSAGENAME.OWNERADDRESS = 'Owner Address :';
TRANSACTIONMESSAGENAME.CONSENSUSPUBKEY = 'Consensus Pubkey :';
TRANSACTIONMESSAGENAME.COMMISSIONRATE = 'Commission Rate :';
TRANSACTIONMESSAGENAME.WEBSITE = 'Website :';
TRANSACTIONMESSAGENAME.DETAILS = 'Details :';
TRANSACTIONMESSAGENAME.SHARES = 'Shares :';
TRANSACTIONMESSAGENAME.TOSHARES = 'Shares : ';//此处有空格
TRANSACTIONMESSAGENAME.ENDTIME = 'End Time :';
TRANSACTIONMESSAGENAME.NEWADDRESS = 'Withdraw Address:';
TRANSACTIONMESSAGENAME.ORIGINALADDRESS = 'Delegator Address :';
TRANSACTIONMESSAGENAME.PROPOSER = 'Proposer :';
TRANSACTIONMESSAGENAME.TITLE = 'Title :';
TRANSACTIONMESSAGENAME.INITIALDEPOSIT = 'Initial Deposit :';
TRANSACTIONMESSAGENAME.DESCRIPTION = 'Description :';
TRANSACTIONMESSAGENAME.PROPOSALTYPE = 'Proposal Type :';
TRANSACTIONMESSAGENAME.DEPOSITOR = 'Depositor :';
TRANSACTIONMESSAGENAME.PROPOSALID = 'Proposal ID :';
TRANSACTIONMESSAGENAME.DEPOSIT = 'Deposit :';
TRANSACTIONMESSAGENAME.VOTER = 'Voter :';
TRANSACTIONMESSAGENAME.OPTION = 'Option :';
TRANSACTIONMESSAGENAME.FAMILY = 'Family :';
TRANSACTIONMESSAGENAME.SOURCE = 'Source :';
TRANSACTIONMESSAGENAME.GATEWAY = 'Gateway :';
TRANSACTIONMESSAGENAME.SYMBOL = 'Symbol :';
TRANSACTIONMESSAGENAME.CANONICALSYMBOL = 'Canonical Symbol :';
TRANSACTIONMESSAGENAME.NAME = 'Name :';
TRANSACTIONMESSAGENAME.DECIMAL = 'Decimal :';
TRANSACTIONMESSAGENAME.SYMBOLMINALIAS = 'SymbolMinAlias :';
TRANSACTIONMESSAGENAME.INITIALSUPPLY = 'InitialSupply :';
TRANSACTIONMESSAGENAME.MAXSUPPLY = 'MaxSupply :';
TRANSACTIONMESSAGENAME.MINTABLE = 'Mintable :';
TRANSACTIONMESSAGENAME.TOKENID = 'TokenId :';
TRANSACTIONMESSAGENAME.ORIGINALOWNER = 'Original Owner :';
TRANSACTIONMESSAGENAME.NEWOWNER = 'New Owner :';
TRANSACTIONMESSAGENAME.BLOCKINTERVAL = 'Block Interval :';
TRANSACTIONMESSAGENAME.REQUESTID = 'Request ID :';
TRANSACTIONMESSAGENAME.RANDHEIGHT = 'Rand Height :';
TRANSACTIONMESSAGENAME.HASHLOCK = 'Hash Lock :';
TRANSACTIONMESSAGENAME.TIMELOCK = 'Time Lock :';
TRANSACTIONMESSAGENAME.TIMESTAMP = 'Timestamp :';
TRANSACTIONMESSAGENAME.EXPIRYHEIGHT = 'Expiry Height :';
TRANSACTIONMESSAGENAME.CROSSCHAINREVEIVER = 'Cross-chain Receiver :';
TRANSACTIONMESSAGENAME.SECRET = 'Secret :';
TRANSACTIONMESSAGENAME.PARAMETER = 'Parameter :';
TRANSACTIONMESSAGENAME.SOFTWARE = 'Software :';
TRANSACTIONMESSAGENAME.VERSION = 'Version :';
TRANSACTIONMESSAGENAME.SWITCHHEIGHT = 'Switch Height :';
TRANSACTIONMESSAGENAME.TRESHOLD = 'Treshold :';
TRANSACTIONMESSAGENAME.ADDRESS = 'Address :';
TRANSACTIONMESSAGENAME.ADDRESSBY = 'Added By :';
TRANSACTIONMESSAGENAME.DELETEDBY = 'Deleted By :';
TRANSACTIONMESSAGENAME.USAGE = 'Usage :';
TRANSACTIONMESSAGENAME.DESTADDRESS = 'DestAddress :';
TRANSACTIONMESSAGENAME.PERCENT = 'Percent :';
TRANSACTIONMESSAGENAME.CANONICALSYMBOL = 'CanonicalSymbol :';
TRANSACTIONMESSAGENAME.MINUNITALIAS = 'MinUnitAlias :';


TRANSACTIONMESSAGENAME.INPUTADDRESS = 'Input Address :';
TRANSACTIONMESSAGENAME.OUTPUTADDRESS = 'Output Address :';
TRANSACTIONMESSAGENAME.INPUT = 'Input :';
TRANSACTIONMESSAGENAME.OUTPUT = 'Output :';
TRANSACTIONMESSAGENAME.DEADLINE = 'Deadline :';
TRANSACTIONMESSAGENAME.ISBUYORDER = 'Is Buy Order :';

TRANSACTIONMESSAGENAME.MAXTOKEN = 'Max Token :';
TRANSACTIONMESSAGENAME.EXACTIRISAMT = `Exact ${store.nativeToken} Amount :`;
TRANSACTIONMESSAGENAME.MINLIQUIDITY = 'MinLiquidity :';
TRANSACTIONMESSAGENAME.SENDER = 'Sender :';


TRANSACTIONMESSAGENAME.MINTOKEN = 'Min Token :';
TRANSACTIONMESSAGENAME.WITHDRAWLIQUIDITY = 'Withdraw Liquidity :';
TRANSACTIONMESSAGENAME.MINIRISAMT = `Min ${store.nativeToken} Amount :`;


const SUBMITPROPOSALTYPE = {};
SUBMITPROPOSALTYPE.SUBMITSOFTWAREUPGRADEPROPOSAL = 'SubmitSoftwareUpgradeProposal';
SUBMITPROPOSALTYPE.SUBMITTXTAXUSAGEPROPOSAL = 'SubmitTaxUsageProposal';
SUBMITPROPOSALTYPE.SUBMITTOKENADDITIONPROPOSAL = 'SubmitTokenAdditionProposal';
SUBMITPROPOSALTYPE.SUBMITPROPOSAL = 'SubmitProposal';

const C = {
  PREFIX,
  SUFFIX,
  EventType,
  TxType,
  ValidatorStatus,
  Denom,
  ENVCONFIG,
  CHAINNAME,
  PARAMETER,
  CHAINID,
  RADIXDENOM,
  TRANSACTIONMESSAGENAME,
  SUBMITPROPOSALTYPE,
};

export default C;

export const Constant = C;

export const TX_TYPE = TxType;

export const TX_STATUS = {
    success : 'success',
    fail : 'fail',
}

export const ColumnMinWidth = {
    txHash:'120',
    blockHeight:'90',
    txType:'130',
    address:'120',
    time:'180',
    txn:'',
    blockAge:'120',
    validatirName:'120',
    votingPower:'120',
    publickKey:'450',
    denom:'155',
    tokenId:'200',
    schema:'450',
    URI:'120',
    respondTimes:'125',
    available:'100',
    qos:'120',
    requestId:'130',
    state:'125',
    serviceName:'120',
    No:'50',
    price:'120',
    deposit:'120'
}

