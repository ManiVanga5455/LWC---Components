import { LightningElement, wire, api } from "lwc";
import searchRecords from "@salesforce/apex/CustomLookupController.searchRecords";
const DELAY = 300;

export default class CustomSearchComponent extends LightningElement {
  @api apiObjectName = "Account";
  searchValue = "";
  @api objectLabelName = "Account";
  @api iconName = "standard:account";
  delayTimeout;
  displayRecordList = false;
  selectedRecord = {
    selectedId: "",
    selectedName: "",
  };

  // Fetch search results using Apex
  @wire(searchRecords, {
    objectApiName: "$apiObjectName",
    searchKey: "$searchValue",
  })
  searchResults;

  get isRecordSelected() {
    return this.selectedRecord.selectedId !== "";
  }

  // Handle input change with debounce
  changehandler(event) {
    window.clearTimeout(this.delayTimeout);
    const enteredValue = event.target.value;
    this.delayTimeout = setTimeout(() => {
      this.searchValue = enteredValue;
      this.displayRecordList = true;
    }, DELAY);
  }

  // Handle click on result item to show the selected record in the input
  clickHandler(event) {
    const selectedRecordId = event.currentTarget.dataset.item;
    const selectedRecord = this.searchResults.data.find(
      (record) => record.Id === selectedRecordId
    );

    // Update the selected record
    this.selectedRecord = {
      selectedId: selectedRecord.Id,
      selectedName: selectedRecord.Name,
    };
    this.sendData();
    // Hide the dropdown after selection
    this.displayRecordList = false;
  }

  // Handle removing the selected record
  removeHandler() {
    this.selectedRecord = {
      selectedId: "",
      selectedName: "",
    };
    this.sendData();

    // Show the input for search again
    this.displayRecordList = false;
  }

  //This method is used to send the selected record back to the parent component (contactFilter.html)
  sendData() {
    const selectedEvent = new CustomEvent("selected", {
      detail: this.selectedRecord.selectedId,
    });
    this.dispatchEvent(selectedEvent);
  }
}