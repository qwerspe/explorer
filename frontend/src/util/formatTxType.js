import Tools from "../util/Tools"
export default class FormatTxType {
	static formatTxType(txTypeArray){
		
		let allTxType = [],
			tansferObj = {
				value:'transfer',
				label:'Transfer',
				children:[]
			},
			delegationObj = {
				value:'delegation',
				label: 'Delegation',
				children:[]
			},
			validationObj = {
				value:'validation',
				label:'Validation',
				children:[]
			},
			govObj = {
				value:'gov',
				label:'Gov',
				children:[]
			},
            nftObj = {
				value:'nft',
				label:'NFT',
				children:[]
			},
            oracleObj = {
				value:'oracle',
				label:'Oracle',
				children:[]
			},
			othersObj = {
				value:'others',
				label:'Others',
				children:[]
			};
		txTypeArray.forEach( item => {

			switch (item) {
				case "Transfer":
					tansferObj.children.push({
						value:'transfer',
						label:'Transfer'
					});
					break;
				case "Burn":
					tansferObj.children.push({
						value:'burn',
						label:'Burn'
					});
					break;
				case "SetMemoRegexp":
					tansferObj.children.push({
						value:'setMemoRegexp',
						label:'SetMemoRegexp'
					});
					break;
				case "Delegate":
					delegationObj.children.push({
						value:'delegate',
						label:'Delegate'
					});
					break;
				case "BeginRedelegate":
					delegationObj.children.push({
						value:'beginRedelegate',
						label:'BeginRedelegate'
					});
					break;
				case "SetWithdrawAddress":
					delegationObj.children.push({
						value:'setWithdrawAddress',
						label:'SetWithdrawAddress'
					});
					break;
				case "BeginUnbonding":
					delegationObj.children.push({
						value:'beginUnbonding',
						label:'BeginUnbonding'
					});
					break;
				case "WithdrawDelegatorReward":
					delegationObj.children.push({
						value:'withdrawDelegatorReward',
						label:'WithdrawDelegatorReward'
					});
					break;
				case "WithdrawDelegatorRewardsAll":
					delegationObj.children.push({
						value:'withdrawDelegatorRewardsAll',
						label:'WithdrawDelegatorRewardsAll'
					});
					break;
				case "CreateValidator":
					validationObj.children.push({
						value:'createValidator',
						label:'CreateValidator'
					});
					break;
				case "EditValidator":
					validationObj.children.push({
						value:'editValidator',
						label:'EditValidator'
					});
					break;
				case "Unjail":
					validationObj.children.push({
						value:'unjail',
						label:'Unjail'
					});
					break;
				case "WithdrawValidatorRewardsAll":
					validationObj.children.push({
						value:'withdrawValidatorRewardsAll',
						label:'WithdrawValidatorRewardsAll'
					});
					break;
				case "SubmitProposal":
					govObj.children.push({
						value:'submitProposal',
						label:'SubmitProposal'
					});
					break;
				case "Deposit":
					govObj.children.push({
						value:'deposit',
						label:'Deposit'
					});
					break;
				case "Vote":
					govObj.children.push({
						value:'vote',
						label:'Vote'
					});
					break;

				case "IssueDenom":
					nftObj.children.push({
						value:'IssueDenom',
						label:'IssueDenom'
					});
					break;
				case "NFTEdit":
					nftObj.children.push({
						value:'NFTEdit',
						label:'NFTEdit'
					});
					break;
				case "NFTTransfer":
					nftObj.children.push({
						value:'NFTTransfer',
						label:'NFTTransfer'
					});
					break;
				case "NFTMint":
					nftObj.children.push({
						value:'NFTMint',
						label:'NFTMint'
					});
					break;
				case "NFTBurn":
					nftObj.children.push({
						value:'NFTBurn',
						label:'NFTBurn'
					});
					break;
				case "CreateFeed":
                    oracleObj.children.push({
						value:'CreateFeed',
						label:'CreateFeed'
					});
					break;
				case "StartFeed":
                    oracleObj.children.push({
						value:'StartFeed',
						label:'StartFeed'
					});
					break;
				case "PauseFeed":
                    oracleObj.children.push({
						value:'PauseFeed',
						label:'PauseFeed'
					});
					break;
				case "EditFeed":
                    oracleObj.children.push({
						value:'EditFeed',
						label:'EditFeed'
					});
					break;
				case "IssueToken":
					othersObj.children.push({
						value:'issueToken',
						label:'IssueToken'
					});
					break;
				case "EditToken":
					othersObj.children.push({
						value:'editToken',
						label:'EditToken'
					});
					break;
				case "MintToken":
					othersObj.children.push({
						value:'mintToken',
						label:'MintToken'
					});
					break;
				case "TransferTokenOwner":
					othersObj.children.push({
						value:'transferTokenOwner',
						label:'TransferTokenOwner'
					});
					break;
				case "CreateGateway":
					othersObj.children.push({
						value:'createGateway',
						label:'CreateGateway'
					});
					break;
				case "EditGateway":
					othersObj.children.push({
						value:'editGateway',
						label:'EditGateway'
					});
					break;
				case "TransferGatewayOwner":
					othersObj.children.push({
						value:'transferGatewayOwner',
						label:'TransferGatewayOwner'
					});
					break;
				case "RequestRand":
					othersObj.children.push({
						value:'requestRand',
						label:'RequestRand'
					});
					break;
				case "AddTrustee":
					othersObj.children.push({
						value:'addTrustee',
						label:'AddTrustee'
					});
					break;
				case "DeleteProfiler":
					othersObj.children.push({
						value:'deleteProfiler',
						label:'DeleteProfiler'
					});
					break;
				case "DeleteTrustee":
					othersObj.children.push({
						value:'deleteTrustee',
						label:'DeleteTrustee'
					});
					break;
				case "ClaimHTLC":
					othersObj.children.push({
						value:'claimHTLC',
						label:'ClaimHTLC'
					});
					break;
				case "CreateHTLC":
					othersObj.children.push({
						value:'createHTLC',
						label:'CreateHTLC'
					});
					break;
				case "RefundHTLC":
					othersObj.children.push({
						value:'refundHTLC',
						label:'RefundHTLC'
					});
					break;
				case "AddLiquidity":
					othersObj.children.push({
						value:'addLiquidity',
						label:'AddLiquidity'
					});
					break;
				case "RemoveLiquidity":
					othersObj.children.push({
						value:'removeLiquidity',
						label:'RemoveLiquidity'
					});
					break;
				case "SwapOrder":
					othersObj.children.push({
						value:'swapOrder',
						label:'SwapOrder'
					});
					break;
				case "AddProfiler":
					othersObj.children.push({
						value:'addProfiler',
						label:'AddProfiler'
					});
					break;
				case "FundCommunityPool":
					othersObj.children.push({
						value:'FundCommunityPool',
						label:'FundCommunityPool'
					});

			}
			
		});
		allTxType.push(tansferObj,delegationObj,validationObj,govObj,nftObj, oracleObj,othersObj);
		return allTxType
	}
	static getRefUrlTxType(txType){
		let refUrlTxType;
		//下拉框回显项数据结构
		let UrlTxType = [
			['transfer','transfer'],
			['transfer','burn'],
			['transfer','setMemoRegexp'],
			['delegation','delegate'],
			['delegation','beginRedelegate'],
			['delegation','setWithdrawAddress'],
			['delegation','beginUnbonding'],
			['delegation','withdrawDelegatorReward'],
			['delegation','withdrawDelegatorRewardsAll'],
			['validation','createValidator'],
			['validation','editValidator'],
			['validation','unjail'],
			['validation','withdrawValidatorRewardsAll'],
			['gov','submitProposal'],
			['gov','deposit'],
			['gov','vote'],

			['nft','IssueDenom'],
			['nft','NFTEdit'],
			['nft','NFTTransfer'],
			['nft','NFTMint'],
			['nft','NFTBurn'],
			['oracle','CreateFeed'],
			['oracle','StartFeed'],
			['oracle','PauseFeed'],
			['oracle','EditFeed'],


			['others','issueToken'],
			['others','editToken'],
			['others','transferTokenOwner'],
			['others','createGateway'],
			['others','editGateway'],
			['others','transferGatewayOwner'],
			['others','requestRand'],
			['others','addTrustee'],
			['others','deleteProfiler'],
			['others','deleteTrustee'],
			['others','claimHTLC'],
			['others','createHTLC'],
			['others','addLiquidity'],
			['others','removeLiquidity'],
			['others','swapOrder'],
			['others','FundCommunityPool'],
		];
		UrlTxType.forEach( item => {
			if(Tools.onlyFirstWordUpperCase(item[item.length -1]) === txType){
				refUrlTxType = item
			}
		});
		return refUrlTxType
	}
}
