import { LightningElement, api } from 'lwc';

export default class ParentOne extends LightningElement {
childOneSel = "Deselected";
childTwoSel = "Deselected";
childThreeSel = "Deselected";
@api parentReset(){
this.childOneSel = "Deselected";
this.childTwoSel = "Deselected";
this.childThreeSel = "Deselected";   

this.template.querySelector('c-child-one').childReset();
this.template.querySelector('c-child-two').childReset();
this.template.querySelector('c-child-three').childReset();
}
handleChild(event){
switch(event.target.childName){
case "childOne":
event.target.btnSelection ==="Select" ? this.childOneSel = "Selected" : this.childOneSel = "Deselected";
break;
case "childTwo" :
event.target.btnSelection === "Select" ? this.childTwoSel = "Selected" : this.childTwoSel = "Deselected";
break;
case "childThree" :
event.target.btnSelection === "Select" ? this.childThreeSel = "Selected" : this.childThreeSel = "Deselected";
break;
}
}
}