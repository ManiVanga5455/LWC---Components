public with sharing class ContactBrowserController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactListWithId(String accountId) {
        // Static SOQL as the condition is simple
        List<Contact> contactList = [SELECT Id, Name, Email, Phone, AccountId 
                                     FROM Contact 
                                     WHERE AccountId = :accountId 
                                     ORDER BY Name ASC];
        return contactList;
    }
}