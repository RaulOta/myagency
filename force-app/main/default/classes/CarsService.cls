public with sharing class CarsService {
    @AuraEnabled(cacheable=true)
    
    public static List<Car__c> getCars() {
        List<Car__c> lstCars = [SELECT Name, Image_URL__c, Color__c
                                FROM Car__c];
        return lstCars;
    }

    @AuraEnabled(cacheable=true)
    public static Car__c getCarById(String carId){
        Car__c car = [SELECT Name, Color__c, Price__c, Image_URL__c FROM Car__c WHERE Id =:carId];
        return car;
    }
}