import { LightningElement,wire} from 'lwc';
import { getRecords }from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name'

import CONTACT_EMAIL_FIELD from '@salesforce/schema/Contact.Email'
export default class GetRecordsuiApi extends LightningElement {
    nameValue;
    errors;
    name2value;
    emailValue
    @wire(getRecords,{
        records :[
            { 
                recordIds:['0010600002Ct1WdAAJ','0010600002Ct1WcAAJ'],
        fields:[ACCOUNT_NAME_FIELD]
    },
    {
        recordIds:['0030600002CcFeYAAV'],
        fields:[CONTACT_EMAIL_FIELD]
    }
]
})
wiredRecords({ data,error }){
if(data){
    console.log(data)
    this.nameValue = data.results[0].result.fields.Name.value
    this.name2value = data.results[1].result.fields.Name.value
    this.emailValue = data.results[2].result.fields.Email.value
    //this.outputs = data;
    this.errors = null
}else if (error){
    console.log(error)
    this.errors = error;
    this.outputs = null
}
}
}
/*//import ACCOUNT_PHONE_FIELD from '@salesforce/schema/Account.Phone'
//import ACCOUNT_RATING_FIELD from '@salesforce/schema/Account.Rating'
//import CONTACT_NAME from '@salesforce/schema/Contact.Name'
//import CONTACT_ACCOUNID from '@salesforce/schema/Contact.AccountId'*/