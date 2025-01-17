import { LightningElement, wire, api } from "lwc";
import getContactBasedOnAccount from "@salesforce/apex/ContactBrowserController.getContactListWithId";
import { updateRecord } from "lightning/uiRecordApi";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { refreshApex } from "@salesforce/apex";
import { getObjectInfo, getPicklistValues } from "lightning/uiObjectInfoApi";
import CONTACT_OBJECT from "@salesforce/schema/Contact";
import LEAD_SOURCE from "@salesforce/schema/Contact.LeadSource";
import STAGE_FIELD from "@salesforce/schema/Contact.Stage__c";
const columns = [
  {
    label: "First Name",
    fieldName: "FirstName",
    editable: true,
  },
  {
    label: "Last Name",
    fieldName: "LastName",
    editable: true,
  },
  {
    label: "Title",
    fieldName: "Title",
    editable: true,
  },
  {
    label: "Email",
    fieldName: "Email",
    type: "email",
    editable: true,
  },
  {
    label: "Lead Source",
    fieldName: "LeadSource",
    type: "customPicklist",
    editable: true,
    typeAttributes: {
      options: { fieldName: "pickListOptions" },
      value: { fieldName: "LeadSource" },
      context: { fieldName: "Id" },
    },
  },
  {
    label: "Stage",
    fieldName: "Stage__c",
    type: "customPicklist",
    editable: true,
    typeAttributes: {
      options: { fieldName: "StageOptions" },
      value: { fieldName: "Stage__c" },
      context: { fieldName: "Id" },
    },
  },
];

export default class dataTablePickList extends LightningElement {
  @api recordId;
  contactData = [];
  columns = columns;
  draftValues = [];
  contactRefreshProp;
  leadSourceOptions = [];
  stageOptions = [];
  loadTable = false;
  @wire(getContactBasedOnAccount, {
    accId: "$recordId",
    pickList: "$leadSourceOptions",
    stage: "$stageOptions",
  })
  getContactOutput(result) {
    this.contactRefreshProp = result;
    if (result.data) {
      this.contactData = result.data.map((currItem) => {
        let pickListOptions = this.leadSourceOptions;
        let stagePickList = this.stageOptions;
        return {
          ...currItem,
          pickListOptions: pickListOptions,
          StageOptions: stagePickList,
        };
      });
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
  wireSourcePicklist({ data, error }) {
    if (data) {
      this.leadSourceOptions = data.values;
      this.loadTable = true;
    } else if (error) {
      console.log("Error while loading data", error);
    }
  }
  @wire(getPicklistValues, {
    recordTypeId: "$objectInfo.data.defaultRecordTypeId",
    fieldApiName: STAGE_FIELD,
  })
  wireStagePicklist({ data, error }) {
    if (data) {
      this.stageOptions = data.values;
      this.loadTable = true;
    } else if (error) {
      console.log("Error while loading data", error);
    }
  }
  async saveHandler(event) {
    let records = event.detail.draftValues;
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
}
