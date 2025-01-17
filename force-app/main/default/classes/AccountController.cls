public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public  List<Contact> getContactsRelatesToAccount(String AcctId) {
        System.debug('Received Account ID: ' + AcctId);
        List<Contact> conList = [
            SELECT Id, FirstName, LastName, Phone, Email, Title 
            FROM Contact 
            WHERE AccountId = :AcctId
        ];
        System.debug('Query Result: ' + conList);
        return conList;
    }
}
