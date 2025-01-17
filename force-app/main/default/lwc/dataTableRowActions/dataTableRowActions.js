import { LightningElement, wire, api } from "lwc";
import getContactBasedOnAccount from "@salesforce/apex/ContactBrowserController.getContactListWithId";
import { deleteRecord, updateRecord } from "lightning/uiRecordApi";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { refreshApex } from "@salesforce/apex";
import { getObjectInfo, getPicklistValues } from "lightning/uiObjectInfoApi";
import CONTACT_OBJECT from "@salesforce/schema/Contact";
import LEAD_SOURCE from "@salesforce/schema/Contact.LeadSource";

const ACTIONS = [
  { label: "View", name: "view" },
  { label: "Edit", name: "edit" },
  { label: "Delete", name: "delete" },
];

const DEFAULT_ACTIONS = [{ label: "All", checked: true, name: "all" }];

const columns = [
  {
    label: "First Name",
    fieldName: "FirstName",
    editable: true,
    hideDefaultActions: true,
  },
  {
    label: "Last Name",
    fieldName: "LastName",
    editable: true,
    hideDefaultActions: true,
  },
  {
    label: "Title",
    fieldName: "Title",
    editable: true,
    hideDefaultActions: true,
  },
  {
    label: "Phone",
    fieldName: "Phone",
    type: "phone",
    editable: true,
    hideDefaultActions: true,
  },
  {
    label: "Email",
    fieldName: "Email",
    type: "email",
    editable: true,
    hideDefaultActions: true,
  },
  {
    label: "Lead Source",
    fieldName: "LeadSource",
    type: "customPicklist",
    editable: true,
    hideDefaultActions: true,
    typeAttributes: {
      options: { fieldName: "pickListOptions" },
      value: { fieldName: "LeadSource" },
      context: { fieldName: "Id" },
    },
    actions: DEFAULT_ACTIONS,
  },
  {
    label: "Case Count",
    fieldName: "numberOfCases",
    type: "number",
    editable: false,
    hideDefaultActions: true,
  },
  {
    label: "Is Bad Contact",
    fieldName: "isBadContact",
    type: "boolean",
    editable: false,
    hideDefaultActions: true,
  },
  {
    type: "action",
    typeAttributes: {
      rowActions: ACTIONS,
    },
  },
];
export default class EditDataTableRows extends LightningElement {
  @api recordId;
  contactData = [];
  columns = columns;
  draftValues = [];
  contactRefreshProp;
  leadSourceOptions = [];
  viewMode = false;
  editMode = false;
  showModal = false;
  selectedRecordId;
  loadTable = false; // Load data table when actions are available with lead source options
  latestActions = [];
  allContactsData = []; //To back up all the data coming from APEX
  disableMe = true;
  @wire(getContactBasedOnAccount, {
    accId: "$recordId",
    pickList: "$leadSourceOptions",
  })
  getContactOutput(result) {
    this.contactRefreshProp = result;
    if (result.data) {
      // this.contactData = result.data;
      console.log("lead Source options populated");
      this.contactData = result.data.map((currItem) => {
        let pickListOptions = this.leadSourceOptions;
        return {
          ...currItem,
          pickListOptions: pickListOptions,
        };
      });
      this.allContactsData = [...this.contactData];
    } else if (result.error) {
      console.log("Error while Loading Records");
    }
  }

  @wire(getObjectInfo, {
    objectApiName: CONTACT_OBJECT,
  })
  objectInfo;

  @wire(getPicklistValues, {
    recordTypeId: "$objectInfo.data.defaultRecordTypeId",
    fieldApiName: LEAD_SOURCE,
  })
  wirePicklist({ data, error }) {
    if (data) {
      this.leadSourceOptions = data.values;
      this.latestActions = [];
      data.values.forEach((pl) => {
        this.latestActions.push({
          label: pl.label,
          checked: false,
          name: pl.value,
        });
      });

      this.columns.forEach((col) => {
        if (col.fieldName === "LeadSource") {
          col.actions = [...col.actions, ...this.latestActions];
        }
      });
      this.loadTable = true;
    } else if (error) {
      console.log("Error while laoding data", error);
    }
  }
  async saveHandler(event) {
    //updateRecord or Apex Class

    //Access the draft values
    let records = event.detail.draftValues; //Array of modified records
    let updateRecordsArray = records.map((currItem) => {
      let fieldInput = { ...currItem };
      return {
        fields: fieldInput,
      };
    });

    this.draftValues = [];
    let updateRecordsArrayPromise = updateRecordsArray.map((currItem) =>
      updateRecord(currItem)
    );

    await Promise.all(updateRecordsArrayPromise);

    const toastEvent = new ShowToastEvent({
      title: "Success",
      message: "Records Updated Successfully",
      variant: "success",
    });
    this.dispatchEvent(toastEvent);

    await refreshApex(this.contactRefreshProp);
  }

  rowActionHandler(event) {
    let action = event.detail.action;
    let row = event.detail.row;
    this.selectedRecordId = row.Id;
    this.viewMode = false;
    this.editMode = false;
    this.showModal = false;

    if (action.name === "view") {
      this.viewMode = true;
      this.showModal = true;
    } else if (action.name === "edit") {
      this.editMode = true;
      this.showModal = true;
    } else if (action.name === "delete") {
      this.deleteHandler();
    }
  }

  async deleteHandler() {
    //deleteRecordAdapter or Apex class
    try {
      await deleteRecord(this.selectedRecordId);

      const event = new ShowToastEvent({
        title: "Success",
        message: "Record Deleted Successfully",
        variant: "success",
      });
      this.dispatchEvent(event);
      await refreshApex(this.contactRefreshProp);
    } catch (error) {
      const event = new ShowToastEvent({
        title: "Error",
        message: error.body.message,
        variant: "error",
      });
      this.dispatchEvent(event);
    }
  }

  async closeModal(event) {
    this.showModal = false;
    if (this.editMode) {
      await refreshApex(this.contactRefreshProp);
    }
  }
  handleHeaderAction(event) {
    let actionName = event.detail.action.name;
    const colDef = event.detail.columnDefinition;
    const col = this.columns;
    if (actionName === "all") {
      this.contactData = this.allContactsData;
    } else {
      this.contactData = this.allContactsData.filter(
        (item) => actionName === item["LeadSource"]
      );
    }
    col
      .find((currItem) => currItem.fieldName === "LeadSource")
      .actions.forEach((item) => {
        if (item.name === actionName) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      });
    this.columns = [...col];
  }
  get displayTable() {
    if (this.contactData && this.loadTable === true) return true;
    else return false;
  }
}
