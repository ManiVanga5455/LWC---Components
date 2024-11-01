trigger OpportunityTrigger on Opportunity (before insert,before update) {
    if(trigger.isinsert){
        if(trigger.isbefore){
            OpportunityTriggerHandler.updateOppo(trigger.new);
            OpportunityTriggerHandler.clonedOpp(trigger.new);
        }
    }
   if(trigger.isupdate){
       if(trigger.isbefore){ 
           OpportunityTriggerHandler.updateOppo(trigger.new);
           OpportunityTriggerHandler.createTask(trigger.new);
       }else if(trigger.isafter){
           
       }
       }
}