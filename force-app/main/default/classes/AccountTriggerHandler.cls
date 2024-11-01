public class AccountTriggerHandler {
    Public static void deleteAccount(list<account>acclist){	//map<Id,Account>oldmaplist
        list<Contact> conlist = new list <Contact> ();
        map<Id, Account> deletedAccountIds = new map<Id, Account>();
        for(Account acc : acclist){
            if(acc.Active__c == 'No'){
                deletedaccountIds.put(acc.Id, acc);
            }
        }
        list<Account>relatedContacts = [SELECT Id, (SELECT AccountId, Name from Contacts) FROM Account where 
                                       Id =: deletedAccountIds.keyset()];
        for(Account a : relatedContacts){
            for(contact c: a.contacts){
                    conlist.add(c);
                }
            }
         if(!conlist.isempty()){
        delete conlist;
    }
}
    Public static void syncAddress(List<Account>acclist){
        list<Contact> conlist = new list<Contact>();
        set<Id> Ids = new set<Id>();   
        for(Account acc : acclist){
            if (acc.Sync_Address__c == True){
                Ids.add(acc.Id);
            }
        }
        list<Account> UpdateContacts = [SELECT Id,Name,BillingState,billingCity,
                                        BillingCountry,BillingStreet,BillingPostalCode,
                                        (SELECT AccountId, LastName FROM Contacts) 
                                        FROM Account WHERE Id =: Ids];
        for(Account a : updateContacts){
            for(Contact c : a.Contacts){
                c.AccountId = a.Id;
                c.MailingStreet = a.BillingStreet;
                c.MailingPostalCode = a.BillingPostalCode;
                c.MailingState = a.BillingState;
                c.MailingCity = a.BillingCity;
                c.MailingCountry = a.BillingCountry;
                conlist.add(c);
            }}
        update conlist;
    }
    public static void preventEditing (list<account> acclist){
        for(account acc : acclist){
       list<contact> conlist = [select id,Lastname,status__C from contact where Id =: acc.Id AND status__C = 'Active'];
           // if(!conlist.isempty()){
              acc.adderror('Cannot edit');  
        }
    }
    
}