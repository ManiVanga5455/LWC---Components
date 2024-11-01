public class TravelClass {
    String Name;
    integer Mobile;
    String Destination;
    String HotelName;
    Decimal Price;
    integer Start;
    integer Finish;
   Public TravelClass(){
        Name = 'No';
        Mobile = 0;
        Destination = 'NO';
        HotelName = 'No';
        Price = 0.0;
        Start = 0;
        Finish = 0;
    }
    Public TravelClass(string n, integer m, string des, string hN, integer st, integer fin, Decimal pr){
        Name = n;
        Mobile = m;
        Destination = des;
        HotelName = hN;
        Start = st;
        Finish = fin;
        Price = pr;
    }
    public void inputValues(string n, integer m, string des, string hN, integer st, integer fin, Decimal pr){
        Name = n;
        Mobile = m;
        Destination = des;
        HotelName = hN;
        Start = st;
        Finish = fin;
        Price = pr;
    }
       Public void travellingDays(integer NoD){
       Decimal totalPrice;
        totalPrice = NoD * Price;
        system.debug('Hotel Price is ' + totalPrice );
    }
   
    public void getValues(){
        system.debug('Customer Name Is ' + Name);
        system.debug('Customer phone Numer Is ' + Mobile );
        system.debug('Customer is Travelling To ' + Destination);
        system.debug('Customer is staying at ' + HotelName);
        system.debug('Customer Is Travelling On ' + Start);
        system.debug('Custoemer Travel Ends On '+ Finish);
        system.debug('Hotel Price per One Day/night ' + Price);
        
    }
  
}