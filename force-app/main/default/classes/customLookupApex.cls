public with sharing class customLookupApex {
    @AuraEnabled(cacheable=true)
    public static List<sObject> getAccRecords(String objectApiName, String searchKey){
        List<sObject> ObjList = new List<sObject>();
        if(String.isNotBlank(searchKey)){
            String key = '%' + searchKey + '%';
            String record = 'SELECT Id, Name FROM ' + objectApiName + ' WHERE Name LIKE :key';
            ObjList = Database.query(record);
        }
        return ObjList;
    }
}