import { LightningElement, wire } from "lwc";
import {
  getObjectInfo,
  getPicklistValuesByRecordType,
} from "lightning/uiObjectInfoApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";

export default class GetPicklistValues2024 extends LightningElement {
  // Wire to get object info for Account
  @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
  wiredObjectInfo;

  // Dynamically pass recordTypeId once accInfo is fetched
  @wire(getPicklistValuesByRecordType, {
    recordTypeId: "$wiredObjectInfo.data.defaultRecordTypeId",
    objectApiName: ACCOUNT_OBJECT,
  })
  picklistValues;
}