import { LightningElement } from 'lwc';

export default class CModelComponent extends LightningElement {
    closeHandler(){
    const myevent = new CustomEvent('close')
    this.dispatchEvent(myevent);
    }
   
}