@isTest
public class TravelClassTest {
    public static testMethod void main(){
        TravelClass Mani2 = new TravelClass();
        Mani2.getValues();
        TravelClass Mani = new TravelClass('Mani',0767913761,'Kerala','Parc',20231206,20231210,1000);
        Mani.getValues();
        Mani.inputValues('Mani',0767913761,'Goa','Taj',20231210,20231215,2000);
        Mani.travellingDays(5);
        Mani.getValues();
																					//Mani.hotelPrice();
    }
}