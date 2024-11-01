import { LightningElement, wire } from "lwc";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import { getObjectInfo, getPicklistValues } from "lightning/uiObjectInfoApi";
import INDUSTRY_FIELD from'@salesforce/schema/Account.Industry'
export default class WireGetObjectInfo extends LightningElement {
 value;  
@wire(getObjectInfo,{
    objectApiName:ACCOUNT_OBJECT
}) objectInfo

    @wire (getPicklistValues,{
        recordTypeId:'$objectInfo.data.defaultRecordTypeId',
        fieldApiName:INDUSTRY_FIELD
    }) IndustrypicklistValues;
   
    handleChange(event){
this.value = event.target.value;
    }
}