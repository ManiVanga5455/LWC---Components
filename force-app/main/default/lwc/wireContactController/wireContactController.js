import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
const columns = [
    { label: 'First Name', fieldName: 'FirstName'},
    { label: 'Last Name', fieldName: 'LastName'},
    { label: 'Email', fieldName: 'Email'},
    { label: 'Phone', fieldName: 'Phone'}];
export default class WireContactController extends LightningElement {
    columns = columns;
    @wire(getContactList) contacts;
}