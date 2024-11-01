import { LightningElement,api } from 'lwc';
//import STUDENT_OBJECT from '@salesforce/schema/Student_info__c'
import NAME_FIELD from '@salesforce/schema/Student_info__c.Name__c'
import SCORE_FIELD from'@salesforce/schema/Student_info__c.Entrance_Score__c'
import PHONE_FIELD from'@salesforce/schema/Student_info__c.Phone_number__c'
import STAGE_FIELD from'@salesforce/schema/Student_info__c.Stages__c'
import ROLE_FIELD from'@salesforce/schema/Student_info__c.Salesforce_Role__c'

export default class RecordViewForm extends LightningElement {
    @api recordId;
    @api objectApiName;
        name=NAME_FIELD;
        score= SCORE_FIELD;
        phone= PHONE_FIELD;
        stage= STAGE_FIELD;
        role= ROLE_FIELD;
    
}