public class ScheduleEmail implements schedulable{
    public static void execute(Schedulablecontext sc){
        list<messaging.singleemailmessage> maillist = new list<messaging.singleemailmessage>();
        list<string>Toaddress = new string[]{'manivanga02@gmail.com','sureshkunchpu100@gmail.com','sarala.domakuntla@gmail.com'};
        messaging.singleemailmessage mail = new messaging.singleemailmessage();
        mail.settoaddresses(Toaddress);
        mail.setsubject('Session Reminder');
        mail.setPlaintextbody('Hello Everyone, This Email is to remind you our daily session is scheduled to begin 10 minutes. Look forward to meet you all. Thank you !! ');
    maillist.add(mail);
         messaging.sendemail(maillist);
    }
   
}