trigger CaseArchive on Case (after update) {
    list<Archived_Cases__c> saveCase = new list<Archived_Cases__c>();
    for(case ca : trigger.new){
        if(ca.status == 'Closed'){
            Archived_Cases__c archive = new Archived_Cases__c();
            archive.case_number__C = ca.Id;
           // archive.case_name__C = ca.id;
            archive.status__C = ca.Status;
            archive.type__C = ca.Type;
            savecase.add(archive);
        }
    }
    if(!savecase.isempty()){
        insert savecase;
    }
}