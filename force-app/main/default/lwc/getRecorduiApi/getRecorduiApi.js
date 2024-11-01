import { LightningElement,wire,api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name'
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName'
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount'
import { getFieldDisplayValue, getFieldValue, getRecord } from 'lightning/uiRecordApi';
export default class GetRecords extends LightningElement {
    @api recordId;
    oppoName;
    oppoAmount;
    oppoStage;
    @wire(getRecord,
        {recordId:"$recordId",
        fields:[NAME_FIELD,STAGE_FIELD,AMOUNT_FIELD]})
        opporecord({data,error}){
        if(data){
            console.log("Data: ", data);// Print to know how to access the data
            this.oppoName=data.fields.Name.value; //getRecord value
            this.oppoStage=getFieldValue(data,STAGE_FIELD) //getField value without destructuring
            this.oppoAmount = getFieldDisplayValue(data,AMOUNT_FIELD)//To displat the value with currency symbol --> usd350,00,000
            this.oppoAmount = getFieldValue(data,AMOUNT_FIELD)//To displat the value without currency symbol use to calculate--> 35000000

        }else if(error){
                console.log("Error: ", error);
            }
        }
}