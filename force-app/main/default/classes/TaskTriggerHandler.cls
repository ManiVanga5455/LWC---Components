public class TaskTriggerHandler {
    Public static void updateScore(list<Task>tlist){
        set<Id> Ids = new set<Id>();
        list<Lead> llist = new list <Lead>();
        for(Task T : tlist){
            if(T.status == 'Completed' && T.WhoId != Null ){//&& T.WhoId.getSObjectType() == Lead.SObjectType
                Ids.add(T.WhoId);
            }
        }
        list<Lead> updateLeads = [SELECT Id, Score__c from lead where Id IN :Ids];
        for(Lead l : updateLeads){
            l.score__c = 10;
           // llist.addall(updateLeads);
        }
      update updateLeads;
    }}