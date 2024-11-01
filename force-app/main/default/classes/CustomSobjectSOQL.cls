public class CustomSobjectSOQL {
    Public static void demo5(){
    List <account> acclist = [SELECT Id,Name from account];
      list <opportunity> opp = new list <opportunity>();
        for(Account a : acclist){
            opportunity o = new opportunity(
            Name = 'Demo5',StageName = 'Qualification',CloseDate = system.today(),AccountId = a.id);
            opp.add(o);
            system.debug(o.Name + ' --> ' + o.Id);
        }
           
            insert opp;

    }
}