public class AccountHandler {
  public static Account insertNewAccount(String name)
  {
  
          Account anew = new Account();
          anew.Name = name;
      try{
          insert anew;          
      }catch(DMLException e){
          return null;         
      }
       return anew;       
  }

}