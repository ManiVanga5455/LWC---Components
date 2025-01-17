@isTest
public class SendLeadNotificationSchedulerTest {

    // Method to create test leads for existing users
    private static void createTestData() {
        // Query existing users from the org (assuming two users with active profiles)
        User user1 = [SELECT Id, Email FROM User WHERE Email = 'user1@example.com' LIMIT 1];
        User user2 = [SELECT Id, Email FROM User WHERE Email = 'user2@example.com' LIMIT 1];

        // Insert leads for existing users in one line
        Lead lead1 = new Lead(FirstName = 'Lead1', LastName = 'Test1', Email = 'lead1@example.com', Company = 'Company1', Status = 'Contacted', OwnerId = user1.Id);
        Lead lead2 = new Lead(FirstName = 'Lead2', LastName = 'Test2', Email = 'lead2@example.com', Company = 'Company2', Status = 'Contacted', OwnerId = user1.Id);
        Lead lead3 = new Lead(FirstName = 'Lead3', LastName = 'Test3', Email = 'lead3@example.com', Company = 'Company3', Status = 'Contacted', OwnerId = user2.Id);
        Lead lead4 = new Lead(FirstName = 'Lead4', LastName = 'Test4', Email = 'lead4@example.com', Company = 'Company4', Status = 'Contacted', OwnerId = user2.Id);
        Lead lead5 = new Lead(FirstName = 'Lead5', LastName = 'Test5', Email = 'lead5@example.com', Company = 'Company5', Status = 'Contacted', OwnerId = user1.Id);

        insert new List<Lead>{ lead1, lead2, lead3, lead4, lead5 };
    }

    // Test method to validate email sending functionality
    @isTest
    static void testSendNotifications() {
        // Create test data (leads for existing users)
        createTestData();

        // Start the test context
        Test.startTest();

        // Invoke the method that sends notifications
        SendLeadNotificationScheduler.sendNotifications();

        // End the test context
        Test.stopTest();

        // Verify that the expected emails were sent
        List<Messaging.SingleEmailMessage> emailsSent = [SELECT Subject, ToAddresses FROM Messaging.SingleEmailMessage];

        // Assert that emails have been sent
        System.assertEquals(2, emailsSent.size(), 'Expected two emails to be sent');

        // Check for the first email (for user1)
        Messaging.SingleEmailMessage email1 = emailsSent[0];
        System.assert(email1.ToAddresses.contains('user1@example.com'), 'Email should be sent to user1@example.com');

        // Check for the second email (for user2)
        Messaging.SingleEmailMessage email2 = emailsSent[1];
        System.assert(email2.ToAddresses.contains('user2@example.com'), 'Email should be sent to user2@example.com');
    }
}
