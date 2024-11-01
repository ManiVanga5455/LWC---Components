import { LightningElement,wire } from 'lwc';
import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class GetPicklistValuesbyRecordType extends LightningElement {
    @wire(getObjectInfo,{
        objectApiName: ACCOUNT_OBJECT
    }) accInfo;

    @wire(getPicklistValuesByRecordType,{
        objectApiName:ACCOUNT_OBJECT,
        recordTypeId:"$accInfo.data.defaultRecordTypeId"
    }) accPicklistInfo;
   
   
    /*({data,error}){
        if(data){
    console.log("Data", data); // to destructure the info
        }else if(error){
    console.log("Error", error);
}
    }*/
    
}