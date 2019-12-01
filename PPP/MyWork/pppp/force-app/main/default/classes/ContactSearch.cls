public class ContactSearch {
	public static List<Contact> searchForContacts(String a,String b)
    {
        List<Contact> cont=[SELECT Id,Name FROM Contact Where Lastname=:a and MailingPostalCode=:b];
         return cont;
 	}
       
 }