import { LightningElement,wire} from 'lwc';
import getContactData from'@salesforce/apex/ContactController.getContactData'
const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Email', fieldName: 'Email'},
    { label: 'Phone', fieldName: 'Phone', type: 'phone' }
];
export default class WireAPEXwithProperty extends LightningElement {
    columns = columns;
@wire (getContactData) contactList;
}