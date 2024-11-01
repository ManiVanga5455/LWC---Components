import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
const columns = [
    { label: 'Last Name', fieldName: 'LastName'},
    { label: 'Phone', fieldName: 'Phone'},
    {lable:'Status',fieldName:'Status__c'},
    {label:'Stage Name',fieldName:'Stage__c'}
];
export default class WireContactController extends LightningElement {
    columns = columns;
    @wire(getContactList) contacts;
}