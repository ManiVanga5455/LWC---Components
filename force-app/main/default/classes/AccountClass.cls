public class AccountClass {
    Public static ID testing(String name, string alertnote, string rating){
        Account acc = new Account();
        acc.Name = name;
        acc.Alert_Note__c = alertnote;
        acc.Rating = rating;
        insert acc;
        return acc.id;
    }
    
}