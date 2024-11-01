import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
  isChecked = false;
    toggle(event){
        this.isChecked = event.target.checked;
    }
    handleChange(event){
      const field = event.target.name;
      this[field] = event.target.value;
    }
}