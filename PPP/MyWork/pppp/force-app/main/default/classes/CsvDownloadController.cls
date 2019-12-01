public inherited sharing class CsvDownloadController {
     public class AccountKufukinnWrapper{  
         //申請年度 
     @AuraEnabled  
     public String sinnSeiNedo; 
    //都道府県コード
     @AuraEnabled  
     public string toDoFuKeiCode;  
    //地域協議会
      @AuraEnabled  
     public string chiikiCode;  
    //地域協議会等管理コード
      @AuraEnabled  
     public string chiikiKanriCode;  
    //共済組合コード
      @AuraEnabled  
     public string kaiSaikumiCode;  
    //農業者名（漢字）
      @AuraEnabled  
     public string NogyouSya;  

     public AccountKufukinnWrapper(AccountKufukinn__c AccountKufukinnObj){  
       this.sinnSeiNedo = AccountKufukinnObj.sinnSeiNedo__c;  
       this.toDoFuKeiCode = AccountKufukinnObj.toDoFuKeiCode__c;  
       this.chiikiCode = AccountKufukinnObj.chiikiCode__c;  
       this.chiikiKanriCode = AccountKufukinnObj.chiikiKanriCode__c; 
       this.kaiSaikumiCode = AccountKufukinnObj.kaiSaikumiCode__c;  
       this.NogyouSya = AccountKufukinnObj.NogyouSya__c; 
     }  
   }  
   @AuraEnabled  
   public static List<AccountKufukinnWrapper> getAccounts(){  
     List<AccountKufukinnWrapper> AccountKufukinnWrapperList = new List<AccountKufukinnWrapper>();  

     for(AccountKufukinn__c akObj : [select id, sinnSeiNedo__c, toDoFuKeiCode__c,chiikiCode__c, chiikiKanriCode__c,
     kaiSaikumiCode__c,NogyouSya__c from AccountKufukinn__c ]){  
       AccountKufukinnWrapperList.add(new AccountKufukinnWrapper(akObj));  
     }  
     return AccountKufukinnWrapperList;  
   }  

 @AuraEnabled(Cacheable = true)
    public static list<AccountKufukinn__c> retriveAccs(String strSearchNedo) {
        strSearchNedo = '%' + strSearchNedo + '%';
        list<AccountKufukinn__c> lstAccs = [SELECT   id, sinnSeiNedo__c, toDoFuKeiCode__c,chiikiCode__c, chiikiKanriCode__c,
     kaiSaikumiCode__c,NogyouSya__c from AccountKufukinn__c WHERE sinnSeiNedo__c LIKE :strSearchNedo];

        if(lstAccs.isEmpty()) {
            throw new AuraHandledException('No Record Found..');
        }
        return lstAccs; 
    }




   //例：searchOtoiawase
    @AuraEnabled(Cacheable = true)
    //public static List<AccountKufukinn__c> searchAccountKufukinn(String sinnSeiNedo, String toDoFuKeiCode, String chiikiCode,String chiikiKanriCode,String kaiSaikumiCode,String NogyouSya) {
       public static List<AccountKufukinn__c> searchAccountKufukinn(String sinnSeiNedo) {
       
       sinnSeiNedo =  '%' + String.escapeSingleQuotes(sinnSeiNedo) + '%';
        // toDoFuKeiCode = '%' + String.escapeSingleQuotes(toDoFuKeiCode) + '%';
        // chiikiCode = '%' + String.escapeSingleQuotes(chiikiCode) + '%';

        // chiikiKanriCode = '%' + String.escapeSingleQuotes(chiikiKanriCode) + '%';
        // kaiSaikumiCode = '%' + String.escapeSingleQuotes(kaiSaikumiCode) + '%';
        // NogyouSya = '%' + String.escapeSingleQuotes(NogyouSya) + '%';
        
      //  String query = 'SELECT id,sinnSeiNedo__c, toDoFuKeiCode__c, chiikiCode__c,chiikiKanriCode__c, kaiSaikumiCode__c, NogyouSya__c From AccountKufukinn__c  ' +
      //       'WHERE sinnSeiNedo__c like \'' + sinnSeiNedo + '\' ' ;
               list<AccountKufukinn__c> lstAccs  = [SELECT id,sinnSeiNedo__c, toDoFuKeiCode__c, chiikiCode__c,chiikiKanriCode__c, kaiSaikumiCode__c, NogyouSya__c From AccountKufukinn__c  WHERE sinnSeiNedo__c LIKE : sinnSeiNedo ];
           
            // 'Or toDoFuKeiCode__c like \'' + toDoFuKeiCode + '\' '+
            // 'or chiikiCode__c like \'' + chiikiCode + '\' '+
            // 'or chiikiKanriCode__c like \'' + chiikiKanriCode + '\' '+
            // 'or kaiSaikumiCode__c like \'' + kaiSaikumiCode + '\' '+
            // 'or NogyouSya__c like \'' + NogyouSya + '\' ';
            // list<AccountKufukinn__c> lstAccs = Database.query(query); 
             if(lstAccs.isEmpty()) {
            throw new AuraHandledException('No Record Found..');
        }
            return lstAccs;
       
    }
}