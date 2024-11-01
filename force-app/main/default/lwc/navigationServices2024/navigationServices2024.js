import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";
import { encodeDefaultFieldValues } from "lightning/pageReferenceUtils";
export default class Example extends NavigationMixin(LightningElement) {
  navigateToHome() {
    // Navigate to the Account home page
    this[NavigationMixin.Navigate]({
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Account",
        actionName: "home",
      },
    });
  }
  navigateToList(event) {
    // Navigate to the Account list page
    this[NavigationMixin.Navigate]({
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Account",
        actionName: "list",
      },
      state: {
        filterName: "MyAccounts",
      },
    });
  }
  accountCreationHandler() {
    this[NavigationMixin.Navigate]({
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Account", // API name of the object
        actionName: "new", // 'new' action to create a new record
      },
    });
  }

  // Contact creation handler with default field values
  contactCreationHandler() {
    const defaultValues = encodeDefaultFieldValues({
      Email: "example@test.com", // Default email
      Phone: "1234567890", // Default phone number
      FirstName: "John", // Default first name
      LastName: "Doe", // Default last name
    });
    this[NavigationMixin.Navigate]({
      type: "standard__objectPage",
      attributes: {
        objectApiName: "Contact", // API name of the object
        actionName: "new", // 'new' action to create a new record
      },

      state: {
        defaultFieldValues: defaultValues,
      },
    });
  }
}

/*
  Another way to put defalu values in navigation service is as follows
  import {encodedDefalutValues} from 'lightning/pageReference utils';
  opportunityHnalder(){
    const defaultValues = encodedDefaultValues({
    Name: 'My Opportunity',
    StageName: 'Prospecting',
    CloseDate: new Date().toISOString(),
  });
    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        objectApiName: "Opportunity",
        actionName: "new",
      },
      state: {
      defaultFieldValues:defaultValues
  }
  */