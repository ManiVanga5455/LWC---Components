public class DMLOperationDemo {
    Public static void Demo6(){
      list<Account> acclist = new list<Account>(); 
        list<Contact> conlist = new list<Contact>();
   		account acc = new account();
        acc.Name = 'Meghana Lokesh';
        acc.AccountNumber = '14785214455';
        acc.Active__c = 'yes';
        acc.Phone = '0787878458';
        acclist.add(acc);
        
        Account acc2 = new account();
        acc2.Name = 'Lokesh';
        acc2.Phone = '0745874587';
        acclist.add(acc2);
        insert acclist;
        
        contact con = new contact();
        con.FirstName = 'Venky';
        con.LastName = 'K';
        con.AccountId = acc.Id;
        conlist.add(con);
        
        contact con2 = new contact();
        con2.LastName = 'Madhu';
        con2.Phone = '074589658';
        con2.AccountId = acc2.Id;
        conlist.add(con2);
        
        insert conlist;
        
        system.debug (acclist);
        system.debug (conlist);
        
    }
    

}