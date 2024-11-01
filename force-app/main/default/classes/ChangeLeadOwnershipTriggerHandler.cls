public class ChangeLeadOwnershipTriggerHandler {
    public static void changeOwner(list<lead>leads){
        for(lead ls : leads){
            if(ls.industry == 'Banking'){
                ls.OwnerId = '00G06000002uFtDEAU';
                update ls;
            }
        }
    }
}