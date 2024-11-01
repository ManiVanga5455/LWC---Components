public with sharing class CustomEventContactContoller {

    @AuraEnabled(cacheable = true)
    public static List<Contact> getContactListwithUrl() {
        return [SELECT Id, Name, LastName, Phone,Email,PhotoUrl,AccountId FROM Contact
        WHERE PhotoUrl != null WITH USER_MODE LIMIT 5];
    }
}