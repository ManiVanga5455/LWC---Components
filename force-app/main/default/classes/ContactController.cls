public with sharing class ContactController {
    @AuraEnabled (cacheable=true)
    public static list<Contact> getContactList(){
   return [SELECT Id, LastName, Phone,Status__c,Stage__c FROM Contact WITH USER_MODE LIMIT 4];
   }
}