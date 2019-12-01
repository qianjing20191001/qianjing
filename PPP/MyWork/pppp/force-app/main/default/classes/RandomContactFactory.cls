public class RandomContactFactory {
    public static List<Contact> generateRandomContacts(integer numofContacts, string LastNameGen){
        
        List<Contact> lstContact= new list<Contact>();
        for(Integer i=0;i<numofContacts;i++){
            LastNameGen ='Test' +i;
            Contact c = new Contact(Firstname=LastNameGen);
            lstContact.add(c);
        }
        return lstContact;
    }

}