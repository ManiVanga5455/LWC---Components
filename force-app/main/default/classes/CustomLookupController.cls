public with sharing class CustomLookupController {
    @AuraEnabled(cacheable=true)
    public static List<SObject> searchRecords(String objectApiName, String searchKey) {
        List<SObject> sObjectList = new List<SObject>();
        if (String.isNotBlank(searchKey)) {
            String key = '%' + searchKey + '%';

            if (objectApiName == 'Account') {
                sObjectList = [SELECT Id, Name FROM Account WHERE Name LIKE :key WITH USER_MODE];
            } else if (objectApiName == 'Contact') {
                sObjectList = [SELECT Id, Name FROM Contact WHERE Name LIKE :key WITH USER_MODE];
            } else if (objectApiName == 'Opportunity') {
                sObjectList = [SELECT Id, Name FROM Opportunity WHERE Name LIKE :key WITH USER_MODE];
            }
            // Add more objects as needed
        }
        return sObjectList;
    }
}