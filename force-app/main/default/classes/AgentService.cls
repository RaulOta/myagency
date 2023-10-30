public with sharing class AgentService {

    @AuraEnabled(cacheable=true)
    public static List<Agent__c > getAgents() {
        return [
            SELECT Name, email__c, Image_URL__c
            FROM Agent__c
        ];
    }

}