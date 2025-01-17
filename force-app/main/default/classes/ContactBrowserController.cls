public with sharing class ContactBrowserController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactListWithId(String accId) {
        // Return an empty list if accountId is null
       return [
            SELECT AccountId, Id, FirstName, LastName, Title, Phone, Email,LeadSource
            FROM Contact
            WHERE AccountId = :accId
            WITH SECURITY_ENFORCED
            LIMIT 10

        ];
    }
    @AuraEnabled(cacheable=true)
    public static list<Contact> getContactforDataTable(){
        list<Contact> conList2 = [ SELECT Id, Name, Phone, Email, Title, AccountId, Account.Name
 FROM Contact WHERE AccountId != null Limit 5];
 return conList2;
}
}
