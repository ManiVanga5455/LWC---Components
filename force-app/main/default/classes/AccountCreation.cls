public class AccountCreation {
    public AccountCreation(String name, String phone, string alertnote){
        Account acc = new Account();
        acc.Name = name;
        acc.Phone = phone;
        acc.Alert_Note__c = alertnote;							//if (acc.Id != Null){
           														// system.debug(acc.Id);
        insert acc;
      }
    Public void inputValues(String name, String phone, string alertnote){
		Account acc = new Account();
        acc.Name = name;
        acc.Phone = phone;
        acc.Alert_Note__c = alertnote;
    	insert acc;
    }
    
    
    

}