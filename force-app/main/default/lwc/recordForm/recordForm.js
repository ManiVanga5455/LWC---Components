import { LightningElement } from 'lwc';
import STUDENT_OBJECT from '@salesforce/schema/Student_info__c'
import NAME_FIELD from '@salesforce/schema/Student_info__c.Name__c'
import SCORE_FIELD from '@salesforce/schema/Student_info__c.Entrance_Score__c'
import CLASS_FIELD from '@salesforce/schema/Student_info__c.Class__c'


import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RecordForm extends LightningElement {
    objectName = STUDENT_OBJECT;
    fileds=[NAME_FIELD, SCORE_FIELD,CLASS_FIELD];
    handleSucess(event){
        const evt = new ShowToastEvent({
            title: 'Record created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);
      
    }
    handleedit(){
        const cevent = new ShowToastEvent({
            title: 'Record created',
            message: 'Record updated Sucessfully',
            variant: 'success',
        });
        this.dispatchEvent(cevent);
       
    }
}