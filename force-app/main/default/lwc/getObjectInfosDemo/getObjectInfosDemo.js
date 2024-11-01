import { LightningElement, wire } from "lwc";
import { getObjectInfos } from "lightning/uiObjectInfoApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import OPPORTUNITY_OBJECT from "@salesforce/schema/Opportunity";

export default class WireGetObjectInfo extends LightningElement {
  objectApiNames = [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT];
objectDetails;
  @wire(getObjectInfos, { objectApiNames: "$objectApiNames" })
  objectInfos({data,error}){
    console.log(data)
    this.objectDetails = JSON.stringify(data)
  }elseif(error){
console.log(error)
  }

  
}