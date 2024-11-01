public class CourseClass {
    public static void disc(){
        List<course__C> cr = new list <course__c>();
        for(course__c cc : cr){
        if(cc.fee__c > 200)
            cc.Discount__c = cc.fee__c * 0.10;
        else
            cc.discount__c = cc.fee__c * 0.20;
        }
    }
}