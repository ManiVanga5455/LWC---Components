import { LightningElement } from 'lwc';

export default class DynamicStyles extends LightningElement {
    p=20;
    changehandler(event){
        this.p=event.target.value;
    }
    get percantage(){
        return 'width:${this.p}%'
    }
}