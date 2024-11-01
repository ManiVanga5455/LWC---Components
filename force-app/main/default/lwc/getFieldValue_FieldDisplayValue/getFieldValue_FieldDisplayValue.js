import { LightningElement, api, wire } from "lwc";
import {
  getRecord,
  getFieldValue,
  getFieldDisplayValue,
} from "lightning/uiRecordApi";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import PHONE_FIELD from "@salesforce/schema/Account.Phone";
import ANNUAL_REVENUE from "@salesforce/schema/Account.AnnualRevenue";
import RATING_FIELD from "@salesforce/schema/Account.Rating";

const FIELDS = [NAME_FIELD, PHONE_FIELD, ANNUAL_REVENUE, RATING_FIELD];

export default class GetFieldValue_FieldDisplayValue extends LightningElement {
  @api recordId;
  name;
  phone;
  annualRevenue;
  rating;

  // Automatically gets record details when recordId changes
  @wire(getRecord, {
    recordId: "$recordId",
    fields: FIELDS,
  })
  wiredRecord({ error, data }) {
    if (data) {
      // Use getFieldValue for raw field values
      this.name = getFieldValue(data, NAME_FIELD);
      this.phone = getFieldValue(data, PHONE_FIELD);
      this.rating = getFieldValue(data, RATING_FIELD);
      // Use getFieldDisplayValue for formatted field values (like currency)
      this.annualRevenue = getFieldDisplayValue(data, ANNUAL_REVENUE);
    } else if (error) {
      console.log(
        "The following error has occurred: " +
          error.statusCode +
          ": " +
          error.message
      );
    }
  }

  handleRecordIdChange(event) {
    this.recordId = event.target.value; // Update recordId when input changes
  }
}