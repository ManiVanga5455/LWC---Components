trigger DuplicateAccount on Account(before insert) {
    List<Account> acclist = [SELECT Name from Account];
   set<string> duplicatename = new set<string>();
    for(account a : acclist){
        //if(a.name != trigger.oldmap.get(a.id).name)
        duplicatename.add(a.name);
        
    }
    for(account ac : trigger.new){
	if(duplicatename.contains(ac.name)) 
        ac.adderror('Account exists');
    }
}