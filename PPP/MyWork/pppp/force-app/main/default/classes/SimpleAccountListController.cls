public class SimpleAccountListController {
    @AuraEnabled
    public static List<Account> getAccountList() {
        return [SELECT Id,Name,AccountNumber,Site
                    FROM Account
                    LIMIT 10];
    }
}