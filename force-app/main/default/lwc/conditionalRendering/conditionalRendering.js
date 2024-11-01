import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
   candidatename 
   onselectoption1 = false;
   onselectoption2 = false;
    changeHandler(event){
        this.candidatename = event.target.value;
    }
    get name(){
        return this.candidatename === 'Mani'
    }
    optionsHandler(event){
        this.onselectoption1= !this.onselectoption1;
    } 
    optionsHandler2(event){
        this.onselectoption2= !this.onselectoption2;
    }
    value;
    options =[
            { label: 'Option 1', value: 'You Have Selected Option 1' },
            { label: 'Option 2', value: 'Option 2' },
            { label: 'Option 3', value: 'Option 3' },
        ];
    
    handleChange(event){
this.value=event.detail.value;
    }
}