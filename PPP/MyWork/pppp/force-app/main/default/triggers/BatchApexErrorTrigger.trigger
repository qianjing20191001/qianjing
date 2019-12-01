trigger BatchApexErrorTrigger on BatchApexErrorEvent (after insert) {
    List<BatchLeadConvertErrors__c> batchLeadConvertErrorsObjList= new List<BatchLeadConvertErrors__c>();
    for(BatchApexErrorEvent evt:Trigger.new){
        for(String item: evt.JobScope.split(',')){
            BatchLeadConvertErrors__c batchLeadConvertErrorsObj=new BatchLeadConvertErrors__c();
            batchLeadConvertErrorsObj.AsyncApexJobId__c=evt.AsyncApexJobId;
            batchLeadConvertErrorsObj.Records__c=evt.JobScope;
            batchLeadConvertErrorsObj.StackTrace__c=evt.StackTrace;
            batchLeadConvertErrorsObjList.add(batchLeadConvertErrorsObj);
        }
    }
   upsert batchLeadConvertErrorsObjList;
}