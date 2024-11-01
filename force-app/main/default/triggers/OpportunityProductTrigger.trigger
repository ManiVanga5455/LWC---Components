trigger OpportunityProductTrigger on OpportunityLineItem (after update) {
    if(trigger.isupdate){
        if(trigger.isafter){
     OpportunityProductTriggerHandler.closingOpportunity(trigger.new);     
        }
    }
}