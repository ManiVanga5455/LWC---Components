public class HTTPCALLOUT {
    public static void example1(){
        HTTP hp = new HTTP();
        
        HTTPRequest req = new HTTPRequest();
        req.setEndPoint('https://dummy.restapiexample.com/api/v1/employees');
        req.setMethod('GET');
        
        HTTPResponse res = hp.send(req);
        string JSONString = res.getBody();
    }
}