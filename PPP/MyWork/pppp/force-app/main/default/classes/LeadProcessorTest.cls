@istest
private class LeadProcessorTest{
	@istest
	
	static void testlead(){
		List<lead> l=new List<Lead>();
		lead ld = new Lead();
		ld.lastName='ssss';
		ld.Company='mmm';
		ld.Status='Closed-Converted';
		ld.LeadSource='Dreamforce';
		l.add(ld);
		insert l;
		
		Test.startTest();
		LeadProcessor lp=new LeadProcessor();
		id jobid=Database.executeBatch(lp);
		Test.stopTest();
	
	}
}