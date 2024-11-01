public with sharing class ProductControllerImperative { 
    @AuraEnabled
    public static List<Product2> getProductListImperatively(String productName) {
        // Define a try-catch block for error handling
        try {
            // Query to fetch the list of active products based on the name provided
            return [
                SELECT Id, Name, IsActive 
                FROM Product2 
                WHERE Name = :productName
                LIMIT 100
            ];
        } catch (Exception e) {
            // Handle generic exceptions
            throw new AuraHandledException('An unexpected error occurred: ' + e.getMessage());
        }
    }
}