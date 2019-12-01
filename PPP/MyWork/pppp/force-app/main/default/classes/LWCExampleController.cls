public inherited sharing class LWCExampleController {
    public class AccountWrapper{  
     @AuraEnabled  
     public string accountName;  
     @AuraEnabled  
     public string accountIndustry;  
     @AuraEnabled  
     public string accountPhone;  
     @AuraEnabled  
     public string accountType;  
     public AccountWrapper(Account accountObj){  
       this.accountName = accountObj.Name;  
       this.accountIndustry = accountObj.Industry;
       this.accountPhone = accountObj.Phone;  
       this.accountType = accountObj.Type;   
     }  
   }  
    @AuraEnabled(Cacheable = true)
    public static list<Account> retriveAccs(String strAccName) {
        strAccName = '%' + strAccName + '%';
        list<Account> lstAccs = [SELECT  Id, Name, Industry, Phone, Type From Account WHERE Name LIKE :strAccName];

        if(lstAccs.isEmpty()) {
            throw new AuraHandledException('No Record Found..');
        }
        return lstAccs; 
    }
}

// public inherited sharing class LWCExampleController {    
//     @AuraEnabled(cacheable=true)
//     public static list<Opportunity> retriveOpportunities() {
//         return [SELECT Id, Name, Account.Name, Account.owner.name, Owner.Name, CreatedDate FROM Opportunity LIMIT 10];
//     }
// }