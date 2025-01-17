import { LightningElement, wire, api } from "lwc";
import getContactList from "@salesforce/apex/ContactBrowserController.getContactListWithId";
import { refreshApex } from "@salesforce/apex";
import { updateRecord } from "lightning/uiRecordApi";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

// Define table columns
const COLS = [
  { label: "First Name", fieldName: "FirstName", editable: true },
  { label: "Last Name", fieldName: "LastName", editable: true },
  { label: "Title", fieldName: "Title", editable: true },
  { label: "Phone", fieldName: "Phone", type: "phone", editable: true },
  { label: "Email", fieldName: "Email", type: "email", editable: true },
];

export default class DatatableInlineEditWithUiApi extends LightningElement {
  @api recordId; // Holds the Account ID
  columns = COLS; // Table columns
  draftValues = []; // Draft changes for inline edits
  contacts; // Holds the wired contacts

  // Wire the Apex method and pass the Account ID dynamically
  @wire(getContactList, { accId: "$recordId" })
  contacts;

  // Handle inline edits
  async handleSave(event) {
    // Prepare draft values for updateRecord
    const recordInputs = event.detail.draftValues.map((draft) => ({
      fields: { ...draft },
    }));

    try {
      // Update records in parallel
      await Promise.all(recordInputs.map((record) => updateRecord(record)));

      // Show success toast
      this.dispatchEvent(
        new ShowToastEvent({
          title: "Success",
          message: "Contacts updated successfully!",
          variant: "success",
        })
      );

      // Refresh data table
      await refreshApex(this.contacts);

      // Clear draft values
      this.draftValues = [];
    } catch (error) {
      console.error("Error updating contacts:", error);

      // Show error toast
      this.dispatchEvent(
        new ShowToastEvent({
          title: "Error",
          message: `Failed to update contacts. ${
            error.body ? error.body.message : error.message
          }`,
          variant: "error",
        })
      );
    }
  }
}
