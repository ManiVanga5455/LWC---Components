@isTest
public class BankTestClass {
    public static testMethod void main(){
//DMOBankClass mani = new DMOBankClass(); // non para
        //mani.getValues();
     DMOBankClass mani2 = new DMOBankClass(124587,'Mnai255',1254);// para   
    mani2.getValues();
        mani2.inputMethod(12453696,'Vishal',258578);
        mani2.deposit(2500);
        mani2.withdrawl(1000);
        mani2.getValues();
    }
}