@isTest
public class DailyLeadProcessorTest {
  static testMethod void DailyLeadProcessSchedule()
    {
          Test.startTest();

         List<Lead> lstLed = new List<Lead>();
        for(Integer i=0;i<200;i++)
        {
        	Lead led= new Lead();
        	led.FirstName ='QIANTEST';
        	led.LastName ='JING'+i;
        	led.Company ='demo'+i;
        	lstLed.add(led);
        }
        insert lstLed;      
        DailyLeadProcessor dlp =new DailyLeadProcessor();
        String jobId = System.Schedule('ScheduledApexTest','0 5 * * * ?',dlp);       
        Test.stopTest();
        }
}