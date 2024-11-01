@isTest
public class LeadStateTest {
    public static testMethod void testTaskPriority(){
        string lss = LeadState.getTask('MG');
            system.assertEquals('Normal',lss);
        system.debug('task priority '  +  lss);
 }
     public static testMethod void testTaskPriority2(){
        string lss = LeadState.getTask('CA');
            system.assertEquals('High',lss);
        system.debug('task priority '  +  lss);
}
     public static testMethod void testTaskPriority3(){
        string lss = LeadState.getTask('');
            system.assertEquals('High',lss);
        system.debug('task priority '  +  lss);
}
}