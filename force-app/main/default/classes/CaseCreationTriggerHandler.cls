public class CaseCreationTriggerHandler {
    public static void createCase(list<feedback__C>fblist){
        list<Case> caselist = new list<Case>();
        //set<Id> ids = new set<Id>();
        for(feedback__c fb : fblist){
            if(fb.rating__c<=5){
                case ca = new case();
                ca.Status = 'New';
                //ca.CurrencyIsoCode = 'EUR-Euro';
                ca.Origin = 'Web';
                ca.ContactId = fb.ContactId__c;
                ca.FeedBack_Id__c = fb.Id;
               caselist.add(ca);
            }
        }
        insert caselist;
    }
 public static void responserecord(list<Case> newCase){
        set<id> ids = new set <Id> ();
        list<messaging.singleemailmessage>maillist = new list<messaging.singleemailmessage>();
        list<string> mailids = new string[]{'manivanga02@gmail.com'};
        for(case newcases : newcase){
            if(newcases.priority == 'High'){// && newcases.status != oldcases.get(newcases.id).status
               ids.add(newcases.id);
            }
        }
        list<Case> caselist = [SELECT Id, CaseNumber, Subject,
    (SELECT Id, Name, Description, ContentType FROM Attachments)FROM Case where id =: ids];
        //if(caselist.isempty()){
         messaging.singleemailmessage mail = new messaging.singleemailmessage();
            mail.settoaddresses(mailids);
        mail.setsubject('Case Update');
        mail.setPlaintextbody(' No Attchments');
    maillist.add(mail);
         messaging.sendemail(maillist);
            }
   }