import { LightningElement } from 'lwc';
import profileImage from '@salesforce/resourceUrl/Mani'; // Import static resource
export default class ApiDecorator extends LightningElement {
    greeting = 'Hello ';
    info = {
        name: '',
        role: '',
        phone: '',
        email: '',
        pic: profileImage
    };

    handleNameChange(event) {
        this.info = { ...this.info, name: event.target.value };
    }

    handleRoleChange(event) {
        this.info = { ...this.info, role: event.target.value };
    }

    handlePhoneChange(event) {
        this.info = { ...this.info, phone: event.target.value };
    }

    handleEmailChange(event) {
        this.info = { ...this.info, email: event.target.value };
    }

    handleSubmit() {
        // Process the info object here if necessary
        console.log('Form submitted:', JSON.stringify(this.info));
    }
}