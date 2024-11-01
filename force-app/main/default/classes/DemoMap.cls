public class DemoMap {
    public static void accountDemo(){
        list<Account> recordDetails = new list<Account>();
        recordDetails=[ SELECT Name,Rating FROM Account LIMIT 2 ];
        map<Id,Account> mapdetails= new map<Id,Account>(recordDetails);
        system.debug('mapdetails are ' + mapdetails);
       system.debug('keys are' + mapdetails.keyset());
       system.debug('key values are ' +  mapdetails.values());
        
        
    }
        
    
            public static void testingMap(){
        map<integer,string> months = new map<integer,string>();
        map<integer,string> extraMonths = new map<integer,string>();
        map<integer,string> clonedMonths = new map<integer,string>();
        set<integer> numbers = new set<integer>();
        
    	months.put(1,'January');
        months.put(2,'February');
        months.put(3,'March');
        months.put(4,'April');
        system.debug('Yearly 1st quarter months are' +  months);
        extraMonths.put(5,'May');
        extraMonths.put(6,'June');
        extraMonths.put(7,'July');
        months.putall(extraMonths);
        system.debug('Yearlt 1st and 2nd Quarter months are ' +  months);
        clonedMonths= months.clone();
        system.debug('Cloned months are ' + clonedMonths);
        system.debug('Cloned months are '+ clonedMonths.Containskey(3));
        system.debug('cloned months are equals to months '+ months.equals(clonedMonths));
        integer months3 = 10;
        integer months4 = 10;
        system.debug(months3==months4);
        system.debug('my Key months are '+ months.keyset());
       
       
    }
    }