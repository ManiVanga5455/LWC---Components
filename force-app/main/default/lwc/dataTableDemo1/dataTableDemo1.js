import { LightningElement, wire } from "lwc";
import getContactListWithId from "@salesforce/apex/ContactBrowserController.getContactforDataTable";

// Define the columns for the data table
const columns = [
  {
    label: "Name",
    fieldName: "contactLink",
    type: "url",
    typeAttributes: {
      label: { fieldName: "Name" }, // Use the Contact's Name as the label
      target: "_blank", // Open in a new tab
    },
  },
  { label: "Email", fieldName: "Email", type: "email" },
  { label: "Phone", fieldName: "Phone", type: "phone" },
  { label: "Title", fieldName: "Title" },
  {
    label: "Account Name",
    fieldName: "accountLink", // If we use this field, It displays Account Id's
    type: "url",
    typeAttributes: {
      label: { fieldName: "AccountName" }, // Use the Account's Name as the label to display Account Name and cliclable
      target: "_blank", // Open in a new tab
    },
  },
];

export default class DataTableDemo1 extends LightningElement {
  contacts; // This will hold the contact records
  columns = columns; // Column configuration for the data table

  // Wire the Apex method to retrieve contact records
  @wire(getContactListWithId)
  contactRecords({ data, error }) {
    if (data) {
      // Map through the data and format the links properly
      this.contacts = data.map((record) => {
        let accountLink = record.AccountId ? "/" + record.AccountId : "#"; // Build the account link using AccountId
        let accountName = record.Account ? record.Account.Name : "No Account"; // Safely handle missing Account Name
        let contactLink = "/" + record.Id; // Build the contact link using Contact Id
        return {
          ...record, // Spread the record to preserve other fields
          AccountName: accountName, // Add AccountName to the record
          accountLink: accountLink, // Add the link to the Account's page
          contactLink: contactLink, // Add the link to the Contact's page
        };
      });
    } else if (error) {
      // Log the error to the console if any
      console.error(error);
    }
  }
}
