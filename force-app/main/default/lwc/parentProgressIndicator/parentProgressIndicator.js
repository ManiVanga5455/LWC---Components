import { LightningElement,track } from 'lwc';

export default class ParentProgressIndicator extends LightningElement {
    @track value;
 options= [
    { label: 'Contacted', value: '1' },
    { label: 'Open', value: '2' },
    { label: 'Unqualified', value: '3' },
    { label: 'Nurturing', value: '4' },
    { label: 'Closed', value: '5' },
];

clickHandler(event){
    this.value=event.detail.value;
} 
}