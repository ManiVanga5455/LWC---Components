import { LightningElement } from 'lwc';

export default class ParentPecentage extends LightningElement {
    pValue = 50;
    handlePercentageChange(event){
        this.pValue = event.target.value;
    }

}