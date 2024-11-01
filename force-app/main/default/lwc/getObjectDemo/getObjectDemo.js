import { LightningElement,wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class GetObjectDemo extends LightningElement {
    accInfo;
    fieldsValue;
    @wire(getObjectInfo,
        {objectApiName:ACCOUNT_OBJECT
        })objectInfo({data,error}){
            if(data){
                console.log(data)
                this.accInfo = data;
                this.fieldsValue = data.fields.AccountNumber.apiName.value
            }else if(error){
                console.log(error)
            }
        }
}