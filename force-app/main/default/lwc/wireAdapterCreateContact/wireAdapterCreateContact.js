import { LightningElement, wire } from "lwc";
import { createRecord } from "lightning/uiRecordApi";
import { getObjectInfo, getPicklistValues } from "lightning/uiObjectInfoApi";
import CONTACT_OBJECT from "@salesforce/schema/Contact";
import FIRST_NAME_FIELD from "@salesforce/schema/Contact.FirstName";
import LAST_NAME_FIELD from "@salesforce/schema/Contact.LastName";
import STATUS_FIELD from "@salesforce/schema/Contact.Status__c";
import STAGE_FIELD from "@salesforce/schema/Contact.Stage__c";
import LEAD_SOURCE_FIELD from "@salesforce/schema/Contact.LeadSource";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class CreateContactForm extends LightningElement {
  firstName;
  lastName;
  status;
  stage;
  leadSource;

  // Get contact object info including record type
  @wire(getObjectInfo, { objectApiName: CONTACT_OBJECT })
  contactInfo;

  // Fetch picklist values based on the record type ID
  @wire(getPicklistValues, {
    recordTypeId: "$contactInfo.data.defaultRecordTypeId",
    fieldApiName: STATUS_FIELD,
  })
  statusOptions;

  @wire(getPicklistValues, {
    recordTypeId: "$contactInfo.data.defaultRecordTypeId",
    fieldApiName: STAGE_FIELD,
  })
  stageOptions;

  @wire(getPicklistValues, {
    recordTypeId: "$contactInfo.data.defaultRecordTypeId",
    fieldApiName: LEAD_SOURCE_FIELD,
  })
  leadSourceOptions;

  handleChange(event) {
    const { name, value } = event.target;
    if (name === "firstName") {
      this.firstName = value;
    } else if (name === "lastName") {
      this.lastName = value;
    } else if (name === "status") {
      this.status = value;
    } else if (name === "stage") {
      this.stage = value;
    } else if (name === "leadSource") {
      this.leadSource = value;
    }
  }

  validate() {
    const isValid = Array.from(
      this.template.querySelectorAll(".validate")
    ).every((input) => input.checkValidity());
    return isValid;
  }

  handleSubmit() {
    if (this.validate()) {
      const fields = {};
      fields[FIRST_NAME_FIELD.fieldApiName] = this.firstName;
      fields[LAST_NAME_FIELD.fieldApiName] = this.lastName;
      fields[STATUS_FIELD.fieldApiName] = this.status;
      fields[STAGE_FIELD.fieldApiName] = this.stage;
      fields[LEAD_SOURCE_FIELD.fieldApiName] = this.leadSource;

      const recordInput = { apiName: CONTACT_OBJECT.objectApiName, fields };

      createRecord(recordInput)
        .then((contact) => {
          this.dispatchEvent(
            new ShowToastEvent({
              title: "Success",
              message: "Contact Created Successfully",
              variant: "success",
            })
          );
        })
        .catch((error) => {
          this.dispatchEvent(
            new ShowToastEvent({
              title: "Error",
              message: error.body.message,
              variant: "error",
            })
          );
        });
    }
  }
  handleCancel() {
    let element = this.template.querySelectorAll(".validate");
    element.forEach((element) => {
      element.reset();
    });
  }
}