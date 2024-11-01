trigger Lead2Trigger on Lead (before insert, before update) {
 list<Task> fallowUpTask = new list<Task>();
      for(Lead leads : trigger.new){
            if(leads.status == 'Open - Not Contacted'){
                Task newTask = new Task();
                newTask.Subject = 'Call';
                newTask.WhoId = leads.Id;
                newTask.ActivityDate = system.today()+7;
                newTask.Status = 'Not Started';
                newTask.OwnerId = userinfo.getuserId();
                //newTask.Id = leads.Id;
                fallowUpTask.add(newTask);
            }
        }
    if(!fallowUpTask.isempty())
        Insert fallowUpTask;
}