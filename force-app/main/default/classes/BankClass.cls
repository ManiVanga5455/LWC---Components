public class BankClass {
	Integer AccNum; 
    String AchName;
    Decimal Balance;				// Data Members (Class Variables)
   
    public BankClass(){			// Non Parameterized Constructor
        AccNum = 0;
        AchName = 'NO Name';
        Balance = 0;
    }
    public BankClass(Integer aNum, String aName, Decimal aBal){	//Parameterized Constructor
        AccNum = aNum;
        AchName = aName;
        Balance = aBal;
    }
    public void inputValues(Integer aNum, String aName, Decimal aBal){	// Input Method With Local Variables Passing
        AccNum = aNum;
        AchName = aName;
        Balance = aBal;
    }
    public void deposit(Decimal Amount){			// Action Method 1
    Balance = Balance  + Amount;
        
    }
    public void withdraw(Decimal Amount){			// Action Method 2
    Balance = Balance  - Amount;	    
    }
    public void checkBalance(){						// Action Method 3
        System.debug(Balance);
    }
    public void getValues(){
        System.debug('Account Number Is : ' + AccNum);
        System.debug('Account Holder Name : ' + AchName);
        System.debug('Your Balance '+ Balance);
       
    }
}