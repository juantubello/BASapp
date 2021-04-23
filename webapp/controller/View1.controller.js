sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "com/firstbassapp/firstapp/model/models",
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, MessageToast, JSONModel, models) {
    "use strict";

    return Controller.extend("com.firstbassapp.firstapp.controller.View1", {
      onInit: function () {
        //set model on view
        this.getView().setModel(models.createRecipient());
      },
      onShowHello: function () {
        MessageToast.show("Hello!");
      },
    });
  }
);
