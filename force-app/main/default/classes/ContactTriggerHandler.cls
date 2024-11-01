public class ContactTriggerHandler {
    Public static void preventDuplicates(list<Contact> conlist){
        for(Contact con : conlist){
            if(con.Title != null){
                list<Contact> oldList = [SELECT AccountId, Title from Contact
                                        WHERE AccountId =: con.AccountId AND Title =: con.Title];
                if(!oldlist.isempty()){
                    con.Title.adderror('Duplicate Title Found');
                }
            }
        }
    }
    public static void activeContacts(list<contact>conlist){
        list<account> acclist = new list <account> ();
         set<Id> activeContactids = new set<Id>();
        for(contact newlist : conlist){
           if(newlist.status__C == 'Active'){
               activeContactids.add(newlist.accountId);   
              }
        }
        list<account> acc = [SELECT Id, active_contacts__C,(SELECT accountId,status__C FROM Contacts)
                                                        FROM Account where Id IN: activeContactids];
        for(account updatelist : acc){
        updatelist.active_contacts__C = updatelist.contacts.size();
            acclist.add(updatelist);}
        update acclist;
    }
    public static void updateactiveContacts(list<contact> conlist, map<Id, contact> oldcontacts){
      list<account> acclist = new list <account> ();
         set<Id> activeContactids = new set<Id>();
        for(contact newlist : conlist){
           if(newlist.status__C == 'Active' &&
              newlist.status__C != oldcontacts.get(newlist.id).status__C ){
               activeContactids.add(newlist.accountId);   
              }
        }
        list<account> acc = [SELECT Id, active_contacts__C,(SELECT accountId,status__C FROM Contacts)
                                                        FROM Account where Id IN: activeContactids];
        for(account updatelist : acc){
        updatelist.active_contacts__C = updatelist.contacts.size();
            acclist.add(updatelist);}
        update acclist;  
    }
    public static void updateActiveContactAfterDelete(list<contact> conlist){
       list<account> acclist = new list <account> ();
         set<Id> activeContactids = new set<Id>();
        for(contact newlist : conlist){
           if(newlist.status__C == 'Active' )       //&&
              //newlist.status__C != oldcontacts.get(newlist.id).status__C )
               activeContactids.add(newlist.accountId);   
              
        }
        list<account> acc = [SELECT Id, active_contacts__C,(SELECT accountId,status__C FROM Contacts)
                                                        FROM Account where Id IN: activeContactids];
        for(account updatelist : acc){
        updatelist.active_contacts__C = updatelist.contacts.size();
            acclist.add(updatelist);}
        update acclist; 
    }
    }