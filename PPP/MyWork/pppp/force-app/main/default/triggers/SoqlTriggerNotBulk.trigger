trigger SoqlTriggerNotBulk on Account (before insert) {
    for(Account a: Trigger.New){
        
        Opportunity[] opps=[SELECT Id,Name,CloseDate FROM Opportunity WHERE Accountid=:a.Id];
                           
    }
}