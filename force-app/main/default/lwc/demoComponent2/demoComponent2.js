import { LightningElement,track } from 'lwc';

export default class DemoComponent2 extends LightningElement {
  myname = 'Mani' 
  city= 'Hyderabad'
  Name= 'Mani'
 @track address = {
    street: 'abc',
    city: 'Wgl',
    state: 'Telangana',
    Country: 'India'

  }
  eventHandler(event){
    this.city = event.target.value;
  }
  trackHandler(event){
this.address.city = event.target.value;
  }
  yourusername;
  yourpassword;
 result ;
 result2;
  cHandler(event){
    const inputusername= event.target.label;
    const inputvalue= event.target.value;
    if(inputusername==="User Name"){
      this.yourusername= inputvalue;
    }else{
      this.yourpassword= inputvalue
    }}
    get enteredData(){
      if (this.yourusername==='admin' && this.yourpassword==='admin123'){
        return this.result= 'Successfull';
      }}
      get enteredData2(){
        if (this.yourusername==='admin' && this.yourpassword==='admin123'){
          return this.result2= 'Failed';
        }}
 
    }