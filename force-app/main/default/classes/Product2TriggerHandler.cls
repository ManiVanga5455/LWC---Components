public class Product2TriggerHandler {
    public static void preventDeletion(list<product2> plist){
        set<Id> Ids = new set<Id>();
        for(Product2 p : plist){
            Ids.add(p.name);  //p.Id
        }
        list<OpportunityLineItem> assooppo = [SELECT Name,Product2Id FROM 
                                              OpportunityLineItem WHERE Name=: Ids			//Id =: Ids
                                            ]; 
        if(!assooppo.isempty()){
            for(Product2 p : plist){
                p.adderror('Product is associated with Oppo');
            }
        }
    }
}