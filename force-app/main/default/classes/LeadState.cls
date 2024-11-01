public class LeadState {
    public static string getTask(string Ls){
        if(string.isblank(Ls) || Ls.length()>2)
            return null;
            string taskPriority;
        if(Ls == 'CA'){
            taskpriority = 'High';
        }else{TaskPriority = 'Normal';
            }
        return taskPriority;
    }
}