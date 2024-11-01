import { LightningElement, wire } from "lwc";
import getConList from "@salesforce/apex/CustomEventContactContoller.getContactListwithUrl";
// This is to publish the event
import { publish, MessageContext } from "lightning/messageService";
import recordSelected from "@salesforce/messageChannel/sendContact__c";
export default class CustomEventParent extends LightningElement {
  @wire(getConList) contacts;
  selectedContact;
  @wire(MessageContext)
  messageContext;
  contactHandler(event) {
    let selectedContactId = event.detail;
    console.log(selectedContactId);

    if (this.contacts && this.contacts.data) {
      this.selectedContact = this.contacts.data.find(
        (contact) => contact.Id === selectedContactId
      );
    }
    const payload = { contactData: this.selectedContact };
    publish(this.messageContext, recordSelected, payload);
  }
}