sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "../model/formatter"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel, formatter) {
    "use strict";

    return Controller.extend(
      "com.firstbassapp.firstapp.controller.InvoiceList",
      {
        formatter: formatter,
        
        onInit: function () {
            let oViewModel = new JSONModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view");
        },
      }
    );
  }
);
