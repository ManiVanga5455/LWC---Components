trigger CourseDiscountTrigger on Course__c (before insert, before update) {
   list <course__c> cr = new list<Course__C>();
    for(Course__c c : trigger.new){
        if(c.fee__c < 250)
        c.discount__C = c.fee__C * 0.10;
        else
             c.discount__C = c.fee__C * 0.20;
    }
}