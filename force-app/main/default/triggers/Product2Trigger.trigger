trigger Product2Trigger on Product2 (before delete) {
    if(trigger.isdelete){
        if(trigger.isbefore){
            Product2TriggerHandler.preventDeletion(trigger.old);
        }
    }
}