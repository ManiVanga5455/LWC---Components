import { LightningElement, wire } from "lwc";
import { publish, MessageContext } from "lightning/messageService";
import recordSelected from "@salesforce/messageChannel/sendMessage__c";

export default class Publisher extends LightningElement {
  @wire(MessageContext)
  messageContext;
  handleClick(event) {
    const payload = {
      sendMessage:
        "Hello, this message is published through LMS through the LWC framework",
    };

    publish(this.messageContext, recordSelected, payload);
  }
}