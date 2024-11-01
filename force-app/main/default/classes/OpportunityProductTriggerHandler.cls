public class OpportunityProductTriggerHandler {
    public static void closingOpportunity(list<opportunityLineItem> oppllist){
        list<Opportunity> opplist = new list <opportunity>();
        set<Id> ids = new set<Id>();
        for(opportunitylineitem opp : oppllist){
            if(opp.status__c == 'Delivered'){ //&& opp.OpportunityId != 'null'
                ids.add(opp.OpportunityId);
                opportunity updatelist = new opportunity();
                updatelist.id =opp.opportunityId;
                //updatelist.Name = opp.opportunityId;
                updatelist.StageName = 'ClosedWon';
                opplist.add(updatelist);
            }
        }
      update opplist; 
    }
}