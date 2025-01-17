import { LightningElement } from "lwc";
import MealDB from "@salesforce/resourceUrl/MealDB";

export default class MealSearch extends LightningElement {
  mealSearch;

  handleSearch(event) {
    this.mealSearch = event.target.value;
  }

  clickHandler(event) {
    let myCustomEvent = new CustomEvent("searchmeal", {
      detail: this.mealSearch,
    });
    this.dispatchEvent(myCustomEvent);
  }
}
