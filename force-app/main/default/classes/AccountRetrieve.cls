public class AccountRetrieve {
    Public static void AccountR(){
        List<Account> AR = [SELECT Name, Phone, Rating,
                           (SELECT LastName,Phone,Stage__c FROM Contacts),
                           (SELECT Name,Amount FROM Opportunities),
                           (SELECT ID FROM Cases) FROM Account];
    for(Account a : AR){
            system.debug(a.Name + '------->' + a.Rating);
        for(Contact c : a.Contacts){
            system.debug(c.LastName + '----->' + c.Stage__c);
        }
        for(Opportunity op : a.opportunities){
            system.debug(op.Name +'--->' + op.Amount);
        } 
        for(Case ca : a.Cases){
            system.debug (ca.Id);
        }
        }
        }
    }