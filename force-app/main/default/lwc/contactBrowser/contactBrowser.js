import { LightningElement, wire } from "lwc";
import getContactListWithId from "@salesforce/apex/ContactBrowserController.getContactListWithId";
export default class ContactBrowser extends LightningElement {
  selectedAccId = null;
  @wire(getContactListWithId, {
    accountId: "$selectedAccId",
  })
  contactsFun({ data, error }) {
    if (data) {
      console.log("Queried Contacts: ", data); // Correctly log the data object
    } else if (error) {
      console.log("Error Occurred: ", error);
    }
  }
  handleContacts(event) {
    this.selectedAccId = event.detail.accountId;
  }
  /*//data.forEach((contact) => {
// console.log("Contact Name: " + contact.Name);
// console.log("Contact Email: " + contact.Email);
//console.log("Contact Phone: " + contact.Phone);
// })*/
}