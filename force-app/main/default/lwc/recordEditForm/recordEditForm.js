import { LightningElement,api } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import RATING_FIELD from '@salesforce/schema/Account.Rating';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Industry from '@salesforce/schema/Account.Industry';

export default class RecordEditForm extends LightningElement {
    @api recordId;
    objectAPIName= ACCOUNT_OBJECT
        name=NAME_FIELD 
        phone=PHONE_FIELD
        industry=INDUSTRY_FIELD
        rating=RATING_FIELD
    successHandler(event){
        const cevent = new ShowToastEvent({
            title: 'Record is created',
            message:'Record Id: '+ event.detail.id,
            variant:'Success'
        });
        this.dispatchEvent(cevent);
    }
    errorHandler(event){
        const cuevent = new ShowToastEvent({
            title: 'Error',
            //message:event.detail.message
            message:'Rating Field is Mandatory'
        });
        this.dispatchEvent(cuevent); 
    }
    clickHandler(event){
let elem = this.template.querySelectorAll('lightning-input-field');
    elem.forEach((currentitem)=>currentitem.reset())
}
/*submitHandler(event){
    event.preventDefault();
    const fields = event.detail.fileds
    if(!fields.Industry){
        //It has to be API Name (Industry)
        fields.Industry = "Energy"
    }
    this.template.querySelector("lightning-record-edit-form").submit(fields)
}*/
}