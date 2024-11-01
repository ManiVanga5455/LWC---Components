import { LightningElement } from 'lwc';

export default class PModelComponent extends LightningElement {
    open=false;
    clickHandler(){
        this.open = true;
    }
    closeHandler(){
        this.open = false;
    }
}