import { LightningElement, wire} from 'lwc';
// getContactData is an Apex method in ContactController class. You have to mention crct method and class at the beginning and ending
import getContactData from '@salesforce/apex/ContactController.getContactData';
const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Email', fieldName: 'Email'},
    { label: 'Phone', fieldName: 'Phone', type: 'phone' }
];
export default class WiredContactlistwithFunction extends LightningElement {
    contacts;
    errors;
    columns = columns;
    @wire (getContactData)
     conFunction({data,error}){
        if(data){
           let upadtedConlist =  data.map((currItem)=>{
                let updatedList = {}
                //If any field is empty here Email is empty
                if(!currItem.hasOwnProperty('Email')){
                    updatedList = {...currItem,Email:'salesforce@gmail.com'}
                }else {
                    updatedList = {...currItem}
                }
                return updatedList;
            });
            this.contacts = [...upadtedConlist];
            this.errors = null;
        }else if(error){
            this.errors = error;
            this.contacts = null;
        }
     }
}