import { LightningElement, wire } from "lwc";
import MYIMAGE from "@salesforce/resourceUrl/Mani";
import EXTERNAL_CSS from "@salesforce/resourceUrl/ExternalCSS";
import { loadStyle } from "lightning/platformResourceLoader";
import GREETING_MESSAGE from "@salesforce/label/c.Greeting_Message";
import USER_ID from "@salesforce/user/Id";
import { getFieldValue, getRecord } from "lightning/uiRecordApi";
import NAME from "@salesforce/schema/User.Name";
import EMAIL from "@salesforce/schema/User.Email";

export default class AccessResources extends LightningElement {
  isFirstLoad = true;
  myImage = MYIMAGE;
  label = {
    greetingMessage: GREETING_MESSAGE,
  };
  userId = USER_ID;
  userName;
  userEmail;

  // Fetching user data
  @wire(getRecord, { recordId: "$userId", fields: [NAME, EMAIL] })
  wiredUser({ error, data }) {
    if (data) {
      this.userName = getFieldValue(data, NAME);
      this.userEmail = getFieldValue(data, EMAIL);
    } else if (error) {
      console.error("Error fetching user data:", error);
    }
  }

  renderedCallback() {
    // Load the external CSS
    if (this.isFirstLoad) {
      this.isFirstLoad = false;
      loadStyle(this, EXTERNAL_CSS)
        .then(() => {
          console.log("Styles loaded");
        })
        .catch((error) => {
          console.log("Styles not loaded", error);
        });
    }
  }
}
