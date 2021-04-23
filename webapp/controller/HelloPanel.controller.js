sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, MessageToast, Fragment) {
    "use strict";

    return Controller.extend(
      "com.firstbassapp.firstapp.controller.HelloPanel",
      {
        onInit: function () {},
        onShowHello: function () {
          MessageToast.show("Hello!");
        },
        onOpenDialog: function(){
            this.getOwnerComponent().openHelloDialog();
        }
      }
    );
  }
);
