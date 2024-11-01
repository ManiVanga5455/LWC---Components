trigger CaseCreationTrigger on FeedBack__c (before insert,after insert, before update,after update) {
    public static void afterinsert(list<case>newcase){
    if(trigger.isinsert){
        if(trigger.isbefore){
       CaseCreationTriggerHandler.responserecord(newcase);     
        }
        else if(trigger.isafter){
CaseCreationTriggerHandler.createCase(trigger.new);
    }
        }
    if(trigger.isupdate){
        if(trigger.isbefore){
          CaseCreationTriggerHandler.responserecord(newcase); 
            
        }else if(trigger.isafter){
            
        }
    }
    }}