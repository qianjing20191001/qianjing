trigger SoqlTriggerBulk on Account (after insert) {
   // ①
  //  List<Account> acctWithOpps=[SELECT Id,(SELECT Id, Name,CloseDate FROM Opportunities)
  //                             FROM Account WHERE id IN :Trigger.New];

  //  for(Account a:acctsWithOpps){
  //      Opportunity[] relateOpps=a.Opportunities;
        
//    }
//    ②
	//List<Opportunity> relatedOpps=[SELECT Id, Name,CloseDate FROM Opportunity WHERE AccountId IN:Trigger.New];
   // for(Opportunity opp:relatedOpps){
    
   // }
   //③ 
    for(Opportunity opp:[SELECT Id,Name,CloseDate FROM Opportunity WHERE AccountId IN:Trigger.NEW]){
        
    }

}