import LightningDataTable from "lightning/dataTable";
import customPicklistTemplate from "./customPicklist.html";
import customPicklistEditTemplate from "./customPicklistEdit.html";
export default class CustomDemoDataType extends LightningDataTable {
  static customTypes = {
    customPicklist: {
      template: customPicklistTemplate,
      editTemplate: customPicklistEditTemplate,
      standardCellLayout: true,
      typeAttributes: ["options", "value", "context"],
    },
  };
}
