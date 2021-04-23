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
        onOpenDialog: function () {
          let oView = this.getView();

          if (!this.byId("helloDialog")) {
            Fragment.load({
              id: oView.getId(),
              name: "com.firstbassapp.firstapp.view.HelloDialog",
            }).then(function (oDialog) {
              oView.addDependent(oDialog);
              oDialog.open();
            });
          }else{
              this.byId("helloDialog").open();
          }
        },
      }
    );
  }
);
