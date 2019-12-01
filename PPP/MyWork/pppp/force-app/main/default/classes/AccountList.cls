public without sharing class AccountList {
	public AccountList() {

	}


@AuraEnabled(cacheable=true)
public static Account getAccounts(Id accountId) {
    return [SELECT  Name, BillingState FROM Account];
}
    	
}