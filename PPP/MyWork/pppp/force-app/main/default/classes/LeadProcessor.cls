global class LeadProcessor implements Database.Batchable<SObject>{

	global Database.QueryLocator start(Database.BatchableContext bc){
		String Query ='Select id FROM Lead';
		return Database.getQueryLocator(Query);
	}
	
	global void execute(Database.BatchableContext bc, List<Lead> scope){
	 List<Lead> leads=new List<Lead>();
		for(Lead ld:scope){
			ld.LeadSource= 'Dreamforce';
			leads.add(ld);
		}
		update leads;
	}

  global void finish(Database.BatchableContext bc){ 


  }
}