import { LightningElement,track } from 'lwc';

export default class PracticeExamples extends LightningElement {
name='....'
@track principal= 50000
    @track rate= 0.12
    @track time= 12
    @track result= 0


   eventHandler(event){
        this.name = event.target.value;
    }
    iHandler(event){
        
        const currentinputname = event.target.label;
        const currentvalue = event.target.value;
        if(currentinputname==="Enter Principal Amount"){
            this.pincipal=currentvalue;
        }else if (currentinputname==="Rate of Interest") {
            this.rate=currentvalue;
        } else {
            this.time=currentvalue;
        }
   }
    calculate(){
        this.result = parseInt(this.principal*this.rate*this.time)/100;
    }
    countHandler(){
        let inputField= this.refs.input1;
        let char=this.refs.charCount;
        let content=inputField.value;
char.textContent=' ' + content.length;
    }
    resultscm;
    inputinches;
    unitHandler(event){
        this.inputinches=event.target.value;
    const centimeters=this.inputinches*2.54;
    this.resultscm=centimeters.toFixed(2);
    }
    emailRegex = "[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$";
}