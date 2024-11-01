import { LightningElement, track, wire } from "lwc";
import { getRecords } from "lightning/uiRecordApi";
import LASTNAME_FIELD from "@salesforce/schema/Contact.LastName";
import ACCOUNT_ID from "@salesforce/schema/Contact.AccountId";
import EMAIL_FIELD from "@salesforce/schema/Contact.Email";

export default class GetBulkRecordsuiAPI extends LightningElement {
  @track records = []; // To hold the fetched records
  @track recordIds = []; // To hold the input record IDs

  @wire(getRecords, {
    recordIds: "$recordIds",
    fields: [EMAIL_FIELD, ACCOUNT_ID, LASTNAME_FIELD],
  })
  wiredRecords({ error, data }) {
    if (data) {
      this.records = data.records; // Assign records fetched from the wire service
    } else if (error) {
      console.error("Error fetching records: ", JSON.stringify(error));
    }
  }

  handleRecordIdChange(event) {
    const inputValue = event.target.value;
    this.recordIds = [
      ...inputValue.split(",").map((recordId) => recordId.trim()),
    ];
  }
}