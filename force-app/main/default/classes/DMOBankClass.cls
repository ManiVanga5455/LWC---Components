public class DMOBankClass {
    integer accnum;
    string accname; //Data members
    decimal balance;
   public DMOBankClass(){ // non para
        accnum =25;
        accname ='Mani';
        balance = 0;
    }
    public DMOBankClass(integer anum,string aname, decimal abal){ // para
        accnum=anum;
        accname=aname;
        balance = abal;
}
    public void inputMethod(integer anum,string aname, decimal abal){
        accnum=anum;
        accname=aname;
        balance = abal;
    }
    public void deposit(decimal amount){ // action 1
        balance =balance + amount;
    }
    public void withdrawl(decimal amount){ //action 2
        balance = balance - amount;
}
    public void getValues(){
        system.debug(accnum);
    }
}