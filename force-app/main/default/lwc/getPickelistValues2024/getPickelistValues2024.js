import { LightningElement, wire } from "lwc";
import { getObjectInfo, getPicklistValues } from "lightning/uiObjectInfoApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import ACTIVE_FIELD from "@salesforce/schema/Account.Active__c";

export default class GetPicklistValues2024 extends LightningElement {
  value = "";

  @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
  objectInfo;

  @wire(getPicklistValues, {
    recordTypeId: "$objectInfo.data.defaultRecordTypeId",
    fieldApiName: ACTIVE_FIELD,
  })
  picklistValues;

  handleChange(event) {
    this.value = event.detail.value; // Update value when user selects an option
    console.log("Selected value: ", this.value); // Log the selected value
  }
}