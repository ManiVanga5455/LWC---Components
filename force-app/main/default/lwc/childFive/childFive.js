import { LightningElement, api} from 'lwc';

export default class ChildFive extends LightningElement {
    @api greetingMessage;
    //@api userDetails;
    @api notDynamic;
    setuserAddress;

    set userDetails(value){
        let cloneduseraddress = {...value}
        this.setuserAddress =cloneduseraddress.Address.toUpperCase();
    }
    @api
    get userDetails(){
        return this.setuserAddress
    }
}