import { LightningElement,track } from 'lwc';

export default class DecoratorsInLWC extends LightningElement {
    greeting = 'Hello! @track decorator used to observe changes on properties of objects and arrays';
    message = '. We do not need to use @track for primitive data types like strings. ';
    greetingMessage;
    @track info = {
        Name : 'Mani Vanga',
        Department : 'Salesforce',
        description : ''
    }
    noTrackHandler() {
        this.greetingMessage = ` ${this.message}`;
    }
    trackHandler(){
        this.info.description = 'Description property is declared as null, On button click it is updating value as fallowing.To access the properties of objects and arrays (info.description), we need to use @track (@track info). if we refresh or update the complete array or object we do not need @track';
        }
    
    hideHandler(){
        this.greetingMessage = '';
        this.info.description = '';
    }
}