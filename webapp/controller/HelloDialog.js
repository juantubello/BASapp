sap.ui.define(
  ["sap/ui/base/ManagedObject", "sap/ui/core/Fragment"],

  function (ManagedObject, Fragment) {
    return ManagedObject.extend(
      "com.firstbassapp.firstapp.controller.HelloDialog",
      {

        constructor: function(oView){
            this._oView = oView;
        },
        exit: function(){
            delete this._oView;
        }
        ,
        open: function () {

          let oView = this._oView;

          if (!oView.byId("helloDialog")) {

            let oFragmentController = {
                onCloseDialog: function(){
                    oView.byId("helloDialog").close();
                }
            }
            Fragment.load({
              id: oView.getId(),
              name: "com.firstbassapp.firstapp.view.HelloDialog",
              controller: oFragmentController,
            }).then(function (oDialog) {
              oView.addDependent(oDialog);
              oDialog.open();
            });
          } else {
            oView.byId("helloDialog").open();
          }
        },
      }
    );
  }
);
