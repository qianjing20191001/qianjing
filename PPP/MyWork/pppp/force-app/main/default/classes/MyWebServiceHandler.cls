global class MyWebServiceHandler{
webService static Id createAccount(String firstName, String lastName){
Contact c = new Contact(lastName=lastName,firstName=firstName); insert c;
return c.id;
} }