trigger ContatTrigger on Contact (before insert,after insert,before update,after update,after delete) {
    if(trigger.isinsert){
        if(trigger.isbefore){
            ContactTriggerHandler.preventDuplicates(trigger.new);
        }else if(trigger.isafter){
                ContactTriggerHandler.activeContacts(trigger.new);}
        }
    
    if(trigger.isupdate){
        if(trigger.isbefore){
            ContactTriggerHandler.preventDuplicates(trigger.new);
            //ContactTriggerHandler.preventEditing(Trigger.new);
        } else if(trigger.isafter){
           ContactTriggerHandler.updateactiveContacts(trigger.new,trigger.oldmap);
        }
    }
    if(trigger.isdelete){
      if(trigger.isafter){
            ContactTriggerHandler.updateActiveContactAfterDelete(trigger.old);
                }
  }
}