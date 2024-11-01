public class LinkedIntegration {
    public static String loginToLinkedin() {
        Http hp = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('callout:Salesforce_Linkedin/v2/me');
        request.setMethod('GET');
        HttpResponse response = hp.send(request);
        Map<String, Object> result = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
        String loginId = (String) result.get('id');
        return loginId;
    }

    public static void postOnLinkedin(String message) {
        String loginId = loginToLinkedin();
        postMessage(loginId, message);
    }

    public static void postMessage(String loginId, String postMessage) {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setMethod('POST');
        request.setHeader('X-Restli-Protocol-Version', '2.0.0');
        request.setHeader('Content-Type', 'application/json');
        String authorId = 'urn:li:person:' + loginId;
        String linkedinPostBody = '{' +
            '"author": "' + authorId + '",' +
            '"lifecycleState": "PUBLISHED",' +
            '"specificContent": {' +
                '"com.linkedin.ugc.ShareContent": {' +
                    '"shareCommentary": {' +
                        '"text": "' + postMessage + '"' +
                    '},' +
                    '"shareMediaCategory": "NONE"' +
                '}' +
            '},' +
            '"visibility": {' +
                '"com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"' +
            '}' +
        '}';
        request.setBody(linkedinPostBody);
        request.setEndpoint('callout:Salesforce_Linkedin/v2/ugcposts');
        HttpResponse response = http.send(request);
        System.debug(response.getBody());
    }
}