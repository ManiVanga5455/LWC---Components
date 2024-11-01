import { LightningElement, api } from "lwc";
import NAME_FIELD from "@salesforce/schema/Opportunity.Name";
import STAGE_FIELD from "@salesforce/schema/Opportunity.StageName";
import AMOUNT_FIELD from "@salesforce/schema/Opportunity.Amount";
import ACCOUNT_NAME_FIELD from "@salesforce/schema/Opportunity.AccountId";
import CLOSE_DATE_FIELD from "@salesforce/schema/Opportunity.CloseDate";
import TYPE_FIELD from "@salesforce/schema/Opportunity.Type";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class RecordEditForm2024 extends LightningElement {
  @api objectApiName;
  fields = {
    name: NAME_FIELD,
    stageName: STAGE_FIELD,
    amount: AMOUNT_FIELD,
    accountName: ACCOUNT_NAME_FIELD,
    closeDate: CLOSE_DATE_FIELD,
    type: TYPE_FIELD,
  };

  handleReset(event) {
    let element = this.template.querySelectorAll("lightning-input-field");
    element.forEach((element) => {
      element.reset();
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const fields = event.detail.fields;
    fields.Type = "New Customer"; // Adding a default value for Type field
    this.template.querySelector("lightning-record-edit-form").submit(fields);
  }

  // Fix for success message
  successHandler(event) {
    const toastEvent = new ShowToastEvent({
      title: "Success",
      variant: "success",
      message: "Record created with ID: " + event.detail.id, // Use event.detail.id to display record ID
    });
    this.dispatchEvent(toastEvent);
  }

  errorHandler(event) {
    const evt = new ShowToastEvent({
      title: "Error",
      variant: "error",
      message: event.detail.message, // Show the error message
    });
    this.dispatchEvent(evt);
  }
}