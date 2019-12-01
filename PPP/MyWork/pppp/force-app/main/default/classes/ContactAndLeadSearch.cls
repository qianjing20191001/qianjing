public class ContactAndLeadSearch {
    public static List<List<SObject>> searchContactsAndLeads(String Sm){
        List<List<SObject>> searchList=[FIND 'Sm' IN ALL FIELDS 
                                        RETURNING Contact(FirstName,LastName), Lead(Firstname, LastName)];
        return searchList;
    
    }
}