trigger DmlTriggerNotBulk on Account (after update) {
    
    List<Opportunity> relatedOpps=[SELECT id,Name,Probability FROM  Opportunity
                                  WHERE AccountId IN:Trigger.New];
    
    
   List<Opportunity> oppsToUpdate=new List<Opportunity>();
    
    for(Opportunity opp:relatedOpps){     
        if((opp.Probability>=50) && (opp.Probability<100)){
            opp.Description='ssss';
            oppsToUpdate.add(opp);
        }
    }
    update oppsToUpdate;
}