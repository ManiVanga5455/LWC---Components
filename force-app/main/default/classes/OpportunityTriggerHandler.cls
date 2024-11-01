public class OpportunityTriggerHandler {
    Public static void updateOppo(list<Opportunity> oppolist){
        for(Opportunity opp : oppolist){
            if(opp.StageName == 'Qualification' && opp.CloseDate >= date.today() 
               && opp.closedate <= system.today() + 30){
                   opp.Priority__c = 'High';
               }
        }
    }
    public static void createTask(list<Opportunity> opplist){
        list<Task> fallowUpTask = new list<Task>();
        //Date thirtyDaysAgo = Date.today().addDays(-30);
        for(opportunity opp : opplist){
            if(opp.StageName == 'Qualification' ){
                Task newTask = new Task(Subject = 'Call',WhatId = opp.Id,
                                        ActivityDate = system.today()+7,
                                        Status = 'Not Started',
                                        OwnerId = opp.OwnerId);			//userinfo.getuserId());
                fallowUpTask.add(newTask);
            }
        }
        if(!fallowUpTask.isempty())                                
            Insert fallowUpTask;
    }
    public static void clonedOpp(list<opportunity>opplist){
        for(Opportunity opp : opplist){
            if(opp.isclone()){
                opp.StageName = 'Prospecting';
                //update opp;
            }
        }
    }
}