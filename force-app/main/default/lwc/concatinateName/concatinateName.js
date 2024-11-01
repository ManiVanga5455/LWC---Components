import { LightningElement } from 'lwc';

export default class ConcatinateName extends LightningElement {
    fName;
    lName;
    displayName;
    nameHandler(event){
        let labelelement = event.target.label;
        if(labelelement === "Enter First Name"){
            this.fName = event.target.value;
        }else{
            this.lName = event.target.value;
        }
    }
    addHandler(event){
this.displayName = this.fName + this.lName ;
    }
}