import { LightningElement, wire } from "lwc";
import { getObjectInfo } from "lightning/uiObjectInfoApi";
import CASE_OBJECT from "@salesforce/schema/Case";

export default class GetObjectInfo2024 extends LightningElement {
  caseInfo;
  caseFields = {};
  isLoaded = false;

  @wire(getObjectInfo, { objectApiName: CASE_OBJECT })
  getObjectInfoACC({ data, error }) {
    if (data) {
      console.log("Case OBJECT INFO", data);
      this.caseInfo = data;

      // Extract specific fields - Subject and Description
      this.caseFields.Subject = data.fields.Subject;
      this.caseFields.Description = data.fields.Description;

      // Debugging to ensure fields are loaded
      console.log("Subject Field Info:", this.caseFields.Subject);
      console.log("Description Field Info:", this.caseFields.Description);

      // Ensure the UI knows the data is available
      this.isLoaded = true;
    } else if (error) {
      console.error("Case OBJECT INFO ERROR", error);
    }
  }
}