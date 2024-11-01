@RestResource(urlMapping = '/demoApi/')
global class DemoRESTAPI {
    @HttpGet
    global static list<Account> fetchAccount(){
        list<Account> accList = [SELECT Id, Name, Rating, AnnualRevenue FROM Account LIMIT 5];
			return accList;
    }
    /*global static AccountWrapper fetchAccount() {
        Map<String, String> params = RestContext.request.params;
        String industry = params.get('Industry');
      List<Account> accList = [SELECT Id, Name, Rating FROM Account WHERE Industry = :industry];
        Set<Id> accountIds = new Set<Id>();
        for (Account acc : accList) {
            accountIds.add(acc.Id);
        }
       List<Contact> conList = [SELECT Id, FirstName, Phone FROM Contact WHERE AccountId IN :accountIds];
        List<Opportunity> oppList = [SELECT Id, Name, StageName FROM Opportunity WHERE AccountId IN :accountIds];
        AccountWrapper accWrapper = new AccountWrapper();
        accWrapper.accList = accList;
        accWrapper.conList = conList;
        accWrapper.oppList = oppList;
       return accWrapper;
    }
 global class AccountWrapper {
        global List<Account> accList;
        global List<Contact> conList;
        global List<Opportunity> oppList;
    }*/
   /* @HttpPost
    global static string createAccount(accconwrapper information){
        Account acc = information.accountRecord;
        Contact con = information.contactRecord;
        try{
            insert acc;
            con.accountId = acc.Id;
            insert con;
            return 'Account Inserted Successfully';
        }catch(Exception ex){
            return ex.getMessage();
        }
    }
    global class accconwrapper{
        global Account accountRecord{get;set;}
        global Contact contactRecord{get;set;}
        
    }*/
}