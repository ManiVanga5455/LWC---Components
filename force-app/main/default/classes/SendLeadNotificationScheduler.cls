public with sharing class SendLeadNotificationScheduler {
    
    public static void sendNotifications() {
        List<Lead> leads = [
            SELECT Id, Name, Company, Status, Email, OwnerId, Owner.Name
            FROM Lead
            WHERE Status = 'Contacted' AND LastModifiedDate <= :System.today().addDays(-30)
        ];
        
        if (leads.isEmpty()) {
            return; // No leads to process
        }
        
        Map<Id, List<Lead>> leadsByOwner = new Map<Id, List<Lead>>();
        for (Lead lead : leads) {
            if (!leadsByOwner.containsKey(lead.OwnerId)) {
                leadsByOwner.put(lead.OwnerId, new List<Lead>());
            }
            leadsByOwner.get(lead.OwnerId).add(lead);
        }
        
        for (Id ownerId : leadsByOwner.keySet()) {
            List<Lead> ownerLeads = leadsByOwner.get(ownerId);
            String ownerEmail;
            
            if (Test.isRunningTest()) {
                // Assign a test email during test runs
                ownerEmail = 'testowner@example.com';
            } else {
                // Retrieve the actual owner email during normal execution
                User owner = [SELECT Email FROM User WHERE Id = :ownerId LIMIT 1];
                ownerEmail = owner.Email;
            }
            String baseUrl = System.Url.getOrgDomainUrl().toExternalForm();
            
            String emailBody = 'Dear ' + ownerLeads[0].Owner.Name + ',<br/><br/>';
            emailBody += 'Here are your leads with no modification in the past 30 days, but their status is at the Sales Accepted Level:<br/><br/>';
            
            for (Lead lead : ownerLeads) {
                
                String leadLink = baseUrl + '/' + lead.Id;
                emailBody += 'Lead Name: <a href="' + leadLink + '">' + lead.Name + '</a><br/>';
                emailBody += 'Company: ' + lead.Company + '<br/>';
                emailBody += 'Lead Stage: ' + lead.Status + '<br/>';
                emailBody += 'Lead Email: ' + lead.Email + '<br/>';
                emailBody += 'Last Modified: ' + lead.LastModifiedDate + '<br/>';
                emailBody += '-------------------------------<br/>';
            }
            
            emailBody += '<br/>Please take necessary actions.<br/><br/>Regards,<br/>Salesforce Automation';
            
            Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
            email.setToAddresses(new String[] { ownerEmail });
            email.setSubject('Notification: Leads with No Activity in 30 Days');
            email.setHtmlBody(emailBody);
            Messaging.sendEmail(new Messaging.SingleEmailMessage[] { email });
        }
    }
    
    
    // Schedulable method
    public void execute(SchedulableContext sc) {
        // Call the static method to send notifications
        sendNotifications();
}
}