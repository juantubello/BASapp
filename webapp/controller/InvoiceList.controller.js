sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "../model/formatter", "sap/ui/model/Filter", "sap/ui/model/FilterOperator"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel, formatter, Filter, FilterOperator) {
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
        onFilterInvoices: function(oEvent){

            //Build filter de tipo array
            let aFilter = [];
            let sQuery = oEvent.getParameter("query");
            if (sQuery){
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            }
            //si tenemos el filtro, lo bindeamos
            let oList = this.byId("invoiceList");

            //obtenemos los items
            let oBinding = oList.getBinding("items");

            //Filtramos
            oBinding.filter(aFilter);

        },
        navigateToDetails: function(oEvent){
            const oItem = oEvent.getSource();
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("Details", { 
                invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
            });
        }
      }
    );
  }
);
