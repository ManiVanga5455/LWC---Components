@isTest
public class BankClassTest {
    Public static testMethod void main(){
        BankClass Mani = new BankClass();
        Mani.getValues();
        BankClass Mani2 = new BankClass(124578, 'Mani Vanga', 20000);
        Mani2.getValues();
        Mani2.inputValues(123456, 'Mani Vanga',50000);
        Mani2.getValues();
        Mani2.deposit(10000);
        Mani2.withdraw(5000);
        Mani2.checkBalance();
        Mani2.getValues();
        Mani2.deposit(1500);
        Mani2.withdraw(1000);
        Mani2.checkBalance();
        Mani2.getValues();
        
        
		
 		
  }
    
       
    
}