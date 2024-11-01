import { LightningElement } from 'lwc';

export default class SimpleCalculator extends LightningElement {
numberone="";
numbertwo="";
result= 0;
numHandler(event){
let lebelelement = event.target.label;
let valueele = event.target.value;
if(lebelelement === "1st Value"){
this.numberone = valueele;
}else if(lebelelement==="2nd Value"){
this.numbertwo = valueele;
}
} 
calcHandler(event){
let calclabel = event.target.label;
if(calclabel === "Add"){
this.result = parseInt(this.numberone) + parseInt(this.numbertwo);
}else if(calclabel === "Substract"){
    this.result = parseInt(this.numberone) - parseInt(this.numbertwo);
}else if(calclabel === "Multiply"){
    this.result = parseInt(this.numberone) * parseInt(this.numbertwo);
}else if (calclabel === "Division"){
    this.result = parseInt(this.numberone) / parseInt(this.numbertwo);
}
this.numberone="";
this.numbertwo=""; 
}

}