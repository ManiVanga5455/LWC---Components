public class ApexScenarios {
    public static void Demo(){
        List<Account> acclist = [SELECT Id,(SELECT Id FROM Contacts) FROM Account];
        if(!acclist.isempty()){
            for(Account a : acclist){
                a.Total_Contacts__c = a.contacts.size();
                 system.debug(a.Id + '-->' + a.Total_Contacts__c );
            }
            update acclist;
         }
     }
    }