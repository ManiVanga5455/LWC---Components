import { LightningElement, track } from 'lwc';

export default class DynamicForm extends LightningElement {
@track selectedValue='';
@track personalDetails = false;
@track additionalDetails = false;
options =[
{label: 'Select Form Type', value: ''},
{label: 'Personal Details', value: 'Details'},
{label: 'Additional Details', value: 'additional'}
];

changeHnadler(event){
this.selectedValue = event.target.value;
this.personalDetails = this.selectedValue === 'Details';
this.additionalDetails = this.selectedValue === 'additional';
}
}