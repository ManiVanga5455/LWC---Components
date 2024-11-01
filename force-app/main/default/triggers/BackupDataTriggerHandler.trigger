trigger BackupDataTriggerHandler on Class__c (after update) {
    list<Student_info__c> studentrecord = new list <Student_info__c>();
        for(class__c c : Trigger.new){
            if(c.field1__C != trigger.oldmap.get(c.id).field1__c ||
               c.field2__C != trigger.oldmap.get(c.id).field2__c ||
                c.field3__C != trigger.oldmap.get(c.id).field3__c){
            Student_info__c st = new Student_info__c ();
                    st.class__C = c.id;
            st.Id = c.classid__C;
            st.field4__C = trigger.oldmap.get(c.id).field1__C;
            st.Field5__c = trigger.oldmap.get(c.id).field2__c;
            st.Field6__c = trigger.oldmap.get(c.id).field3__C;
            st.Entrance_Score__c = 98;
            studentrecord.add(st);
                }
            insert studentrecord;
}
}