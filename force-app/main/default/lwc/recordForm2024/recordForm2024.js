import { LightningElement, api } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { NavigationMixin } from "lightning/navigation";
import NAME_FIELD from "@salesforce/schema/Contact.Name";
import PHONE_FIELD from "@salesforce/schema/Contact.Phone";
import EMAIL_FIELD from "@salesforce/schema/Contact.Email";
import ACCOUNTID_FIELD from "@salesforce/schema/Contact.AccountId";
export default class RecordForm2024 extends NavigationMixin(LightningElement) {
  @api objectApiName = "Contact";
  fields = [NAME_FIELD, PHONE_FIELD, EMAIL_FIELD, ACCOUNTID_FIELD];
  handleSuccess(event) {
    const toastEvent = new ShowToastEvent({
      title: "Contact created",
      message: "Record ID: " + event.detail.id,
      variant: "success",
    });
    this.dispatchEvent(toastEvent);
    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        recordId: event.detail.id,
        objectApiName: "Contact", // Object API name
        actionName: "view", // Navigating to the view page
      },
    });
  }
}