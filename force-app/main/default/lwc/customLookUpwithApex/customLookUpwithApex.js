import { LightningElement, wire,api } from "lwc";
import getAccRecords from "@salesforce/apex/customLookupApex.getAccRecords";
const DELAY = 300; // 3 seconds
export default class CustomLookUpwithApex extends LightningElement {
 @api apiName = "Account";
  searchValue;
  @api objectLabel = "Account";
  @api iconName = "standard:account";
  delayTime;
  selectedRecord = {
    selId: " ",
    selName: " "
};
displaylist = false;
  @wire(getAccRecords, {
    objectApiName: "$apiName",
    searchKey: "$searchValue", // Reactive property 
  })
  outputs;
  get isRecordSelected(){
    return this.selectedRecord.selId === " " ? false : true;
  }
changeHandler(event){
/*this.searchValue = event.target.value --> It is the easy
way but not recommended bz every time keyup fucntion called 
in input apex will be called as well. If you enter 3 letterslike
 B U R event will trigger 3 times and Apexwill be called for 3 times.
*/

//Debouncing: 
window.clearTimeout(this.delayTime) //3. after every 3 seconds it will clear the time
let inputValue = event.target.value;
this.delayTime = setTimeout(()=>{ // 1.It will be called after 3 seconds
this.searchValue = inputValue;    // 2.after 300 seconds value will assigned
this.displaylist = true;
},DELAY) 
}
//To show record in the search box after searching and selecting record
clickHandler(event){
  let selectedId = event.currentTarget.dataset.item;
  console.log(selectedId)
  let outputRecord = this.outputs.data.find(
    (curritem)=>curritem.Id === selectedId );
      this.selectedRecord = {
    selId:outputRecord.Id,
    selName:outputRecord.Name
}
this.displaylist = false;
}
removeHandler(event){
  this.selectedRecord = {
  selId: " ",
  selName: " "
};
this.displaylist=false;
}

}