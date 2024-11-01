trigger ChangeLeadOwnership on Lead (before insert,before update) {
    public static void leadOwner(list<lead>leads){
        ChangeLeadOwnershipTriggerHandler.changeOwner(leads);}
}