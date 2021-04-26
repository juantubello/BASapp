/*es-lint disable no-undef*/
//@ts-nocheck
sap.ui.define([
    "firstbassapp/firstapp/model/formatter",
    "sap/ui/model/resource/ResourceModel"
], function (formatter, ResourceModel) {
    "use strict";
    QUnit.module("Qinvoices Status", {
        beforeEach: function(){
            this._oResourceModel = new ResourceModel({
                bundleUrl: sap.ui.require.toUrl("firstbassapp/firstapp") + "/i18n/i18n.properties"
            });
        },
        afterEach: function(){
            this._oResourceModel.destroy();
        }
    });

    QUnit.test("Should return the Invoice Status", function(assert){

        let oModel = this.stub();
        oModel.withArgs("i18n").returns(this._oResourceModel);

        let oViewStub = {
            getModel : oModel
        }

        let oControllerStub = {
            getView: this.stub().returns(oViewStub)
        }

        let fnIsolatedFormatter =  formatter.statusText.bind(oControllerStub);

        //Assert
        assert.strictEqual(fnIsolatedFormatter("A"), "New", "The invoice satus for A is correct");
        assert.strictEqual(fnIsolatedFormatter("B"), "In progress", "The invoice satus for A is correct");
        assert.strictEqual(fnIsolatedFormatter("C"), "Done", "The invoice satus for A is correct");
    });

});