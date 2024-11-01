import { LightningElement, api } from 'lwc';

export default class ApiChildDecorator extends LightningElement {
    @api displayGreeting;
    @api info; // Receiving the info object from the parent
    @api welcomeMessage = 'Welcome to Child Decorator';
}