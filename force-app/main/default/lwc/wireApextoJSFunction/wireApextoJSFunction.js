import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

const columns = [
    { label: 'Last Name', fieldName: 'LastName' },
    { label: 'Phone', fieldName: 'Phone' },
    { label: 'Status', fieldName: 'Status__c' },
    { label: 'Stage Name', fieldName: 'Stage__c' }
];

export default class WireContactController extends LightningElement {
    columns = columns;
    contacts;
    errors;

    @wire(getContactList) contactFunction({ data, error }) {
        if (data) {
            let updatedContacts = data.map(record => {
                let updatedObject = { ...record };
                // Check for both Status__c and Stage__c individually
                if (!record.hasOwnProperty('Status__c')) {
                    updatedObject.Status__c = 'Active';
                }
                if (!record.hasOwnProperty('Stage__c')) {
                    updatedObject.Stage__c = 'Prospecting';
                }
                return updatedObject;
            });
            this.contacts = [...updatedContacts];
            this.errors = undefined;
        } else if (error) {
            this.contacts = undefined;
            this.errors = error;
        }
    }
}