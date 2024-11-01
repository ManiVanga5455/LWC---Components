import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";
import { encodeDefaultFieldValues } from "lightning/pageReferenceUtils";
export default class ContactFilter extends NavigationMixin(LightningElement) {
  selectedAccountId;
  isDisabled = true;

  selectedHandler(event) {
    this.selectedAccountId = event.detail;
    console.log("selectedAccountId", this.selectedAccountId);
    if (this.selectedAccountId) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
    this.sendDatatoBrowser();
  }
  handleCreateContact() {
    const defaultValues = encodeDefaultFieldValues({
      AccountId: this.selectedAccountId,
    });
    this[NavigationMixin.Navigate]({
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Contact",
        actionName: "new",
      },
      state: {
        defaultFieldValues: defaultValues,
      },
    });
  }
  sendDatatoBrowser() {
    const myEvent = new CustomEvent("passdata", {
      detail: {
        accountId: this.selectedAccountId,
      },
    });
    this.dispatchEvent(myEvent);
    console.log("This is the payload", this.selectedAccountId);
  }
}