@isTest
private class TestVerifyDate {
    @isTest static void testCheckDate(){
        date d1 = VerifyDate.CheckDates(system.today(),system.today().addDays(10));
        System.assertEquals(system.today().addDays(10),d1);
        
        Date date1=Date.newInstance(2019, 09, 18);
        Date date2=Date.newInstance(2019, 11, 18);
        Date rtnDate1=Date.newInstance(2019, 09, 30);
        date d2 = VerifyDate.CheckDates(date1,date2);
        System.assertEquals(rtnDate1,d2);
    }
}