public class ChildToParent {
    public static void CaseDetails(){
        List<Case> loc = [SELECT Id, CaseNumber,
                         Contact.LastName, Contact.Phone,
                         Contact.account.Name,Contact.account.Phone,
                         Contact.Account.owner.Name,Contact.Account.Owner.Email,
                         Contact.account.owner.Profile.Name
                         FROM Case ];
        For(Case ca : loc){
           system.debug(ca.Id + '&' + ca.CaseNumber);
            system.debug(ca.contact.LastName + '&' + ca.contact.phone);
            system.debug(ca.contact.account.Name);
            system.debug(ca.contact.account.owner.name);
            
        }
    }

}