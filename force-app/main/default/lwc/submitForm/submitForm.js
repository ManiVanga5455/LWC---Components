import { LightningElement,track } from 'lwc';

export default class SubmitForm extends LightningElement {
    isSubmitted =false;
    display = false;

    clickHandler(event){
        this.display = !this.display;
    }
}