/**
 * 収入精算書画面用Controller
 *
 */
public without sharing class testApexController {
	public testApexController() {

	}


	/*
	 Report検索
	 */
	@AuraEnabled(cacheable = true)
	public static List<SObject> searchReportNo(String reportNo) {
		System.debug('testApexController searchReportNo start');

		// 検索条件の生成   qWhere = createWhere(qwhere,'reportNo__c','=','',reportNo);
		String qWhere = '';
		String query = '';
		qWhere = ' WHERE reportNo__c = ' + string.escapeSingleQuotes(String.valueOf(reportNo));
		query = 'Select Id , Name, Item1__c, Item2__c, Item3__c, Item4__c, Item5__c, Item6__c from TestForest__c' + qWhere;

		// SQLを実行し返却する
		return Database.query(query);
	}

	/*   
	 Report更新
	 */

	// @AuraEnabled(cacheable=true)
	// public static TestForest__c getSingleReport(){
	//    return [SELECT Id , reportNo__c, Name, Item1__c, Item2__c, Item3__c, Item4__c, Item5__c, Item6__c from TestForest__c LIMIT 1];
	// }
	@AuraEnabled(cacheable = true)
	public static List<SObject> getSingleReport(TestForestListModel inputForm) {
		TestForest__c inputObj = new TestForest__c();
		inputObj.Name = inputForm.reportName;
		//inputObj.reportNo__c = inputForm.reportNo != null ? inputForm.reportNo :'';
		inputObj.Item1__c = inputForm.Item1;
		inputObj.Item2__c = inputForm.item2;
		inputObj.Item3__c = inputForm.item3;
		inputObj.Item4__c = inputForm.Item4;
		inputObj.Item5__c = inputForm.Item5;
		inputObj.Item6__c = inputForm.Item6;
		upsert inputObj;
	     return null;
	}



}