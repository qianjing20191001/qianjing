global class DailyLeadProcessor implements Schedulable {
    
    global void execute(SchedulableContext ctx){
        list<lead> lstLead=[select Id,LeadSource from lead where LeadSource=null limit 200];
        list<lead> led=new list<lead>();   
            if(!lstLead.isEmpty()){     
                for(Lead ld:lstLead){
                    ld.LeadSource ='Dreamforce';
                    led.add(ld);
                }
                update led;
            }
    }

}