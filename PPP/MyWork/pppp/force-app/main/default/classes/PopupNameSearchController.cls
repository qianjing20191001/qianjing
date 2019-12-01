public with sharing class PopupNameSearchController {
	
	public Account account {get; set;}
	public List<Account> accounts {get; set;}
	
	public PopupNameSearchController() {
		this.account = new Account();
		this.accounts = new List<Account>();
	}
	
	public void doSearch() {
		this.accounts = [SELECT Name From Account LIMIT 200];
	}
	
	public void getAccountName() {
		this.account.Name = 'TestAccount';
	}
}