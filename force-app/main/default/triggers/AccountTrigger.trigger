trigger AccountTrigger on Account (before insert,before update, after update, after delete) {
    
    if(trigger.isupdate){
        if(trigger.isbefore){
            AccountTriggerHandler.deleteAccount(trigger.new);
            //AccountTriggerHandler.preventEditing(trigger.new);
        } else if(trigger.isafter){
            AccountTriggerHandler.syncAddress(Trigger.new);
        }
        
    }
}