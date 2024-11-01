import { LightningElement, api } from "lwc";

export default class CustomEventChild extends LightningElement {
  @api contact;
  clickHandler(event) {
    event.preventDefault();
    const clickEvent = new CustomEvent("contactclicked", {
      detail: this.contact.Id,
    });
    this.dispatchEvent(clickEvent);
  }
}