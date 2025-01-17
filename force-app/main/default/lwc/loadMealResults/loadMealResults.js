import { LightningElement, api } from "lwc";

export default class LoadMealResults extends LightningElement {
  @api mealResults = [];
  get checkMeals() {
    return this.mealResults.length > 0;
  }
}
