sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("com.firstbassapp.firstapp.controller.View1", {
      onInit: function () {
      
      },
      onShowHello: function () {
        MessageToast.show("Hello!");
      },
    });
  }
);
