import { LightningElement, api, track } from "lwc";

export default class LwcInFlow extends LightningElement {
  // Directly expose contacts as a public property
  @api contacts = []; // Flow will directly set this property

  // Use computed getter for items to display emails in pill format
  get items() {
    return this.contacts.map((contact) => {
      return {
        type: "icon",
        label: contact.Email, // Display contact email
        name: contact.Email, // Unique identifier for pill
        iconName: "standard:contact",
        alternativeText: "Contact Name",
      };
    });
  }
}

/*   @track _contacts = [];
  set contacts(contacts = []) {
    this._contacts = [...contacts];
  }

  @api
  get contacts() {
    return this._contacts;
  }
  get items() {
    let array = this._contacts.map((contact) => {
      return {
        type: "icon",
        label: contact.Email,
        name: contact.Email,
        iconName: "standard:contact",
        alternativeText: "Contact Name",
      };
    });
    return array;
  }*/
