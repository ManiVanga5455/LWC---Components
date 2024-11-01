import { LightningElement, api, wire } from "lwc";
import { getRecord } from "lightning/uiRecordApi";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import PHONE_FIELD from "@salesforce/schema/Account.Phone";
import ANNUAL_REVENUE from "@salesforce/schema/Account.AnnualRevenue";

const FIELDS = [NAME_FIELD, PHONE_FIELD, ANNUAL_REVENUE];

export default class GetRecorduiAPI2024 extends LightningElement {
  @api recordId;
  name;
  phone;
  annualRevenue;

  // Automatically gets record details when recordId changes
  @wire(getRecord, {
    recordId: "$recordId", // Dynamic recordId binding
    fields: FIELDS, // Correctly passing the fields array
  })
  wiredRecord({ error, data }) {
    if (data) {
      this.name = data.fields.Name.value;
      this.phone = data.fields.Phone.value;
      this.annualRevenue = data.fields.AnnualRevenue.value;
    } else if (error) {
      console.log(
        "The following error has occurred: " +
          error.statusCode +
          " : " +
          error.message
      );
    }
  }

  handleRecordIdChange(event) {
    this.recordId = event.target.value; // Update recordId when input changes
  }
}