import { LightningElement, track } from "lwc";
import getProductListImperatively from "@salesforce/apex/ProductControllerImperative.getProductListImperatively";

// Define the columns for the datatable
const columns = [
  { label: "Id", fieldName: "Id" },
  { label: "Product Name", fieldName: "Name" },
  { label: "Is Active", fieldName: "IsActive", type: "boolean" },
];

export default class ImperativeApexCall extends LightningElement {
  // Declare reactive properties using @track
  @track name;
  @track products = [];
  columns = columns; // Assign columns for use in datatable

  // Handle input change and store the product name
  handleChange(event) {
    this.name = event.target.value;
  }

  // Call the Apex method imperatively when the button is clicked
  getProduct() {
    getProductListImperatively({ productName: this.name })
      .then((result) => {
        console.log("Products: ", result);
        this.products = result;
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }
}