public class Calculation {
    private static integer add(integer a, integer b){
        return a+b;
    }
    private static integer substract(integer a,integer b){
        return a-b;
    }
    private static integer multi(integer a, integer b){
        return a*b;
    }
  public static void doMath(string operator,integer a, integer b){
     if(operator == '+'){
            system.debug(add(a,b));
    }else if(operator == '-'){
            system.debug(substract(a,b));
        }else{
            system.debug(multi(a,b));
			
        }

    
    }}