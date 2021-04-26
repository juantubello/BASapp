sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/Press"
], function (Opa5, Press) {
	"use strict";
	var sViewName = "View1";
	Opa5.createPageObjects({
		onTheAppPage: {

			actions: {
                iSayHelloDialogButton: function(){
                    return this.waitFor({
                        id: "helloButtonDialog",
                        viewName: "firstbassapp.firstapp.view.HelloPanel",
                        actions: new Press(),
                        errorMessage: "Did not find the 'Say Hello Dialog Button' on the Hello Panel view"
                    })
                }
            },

			assertions: {

				iShouldSeeTheApp: function () {
					return this.waitFor({
						id: "app",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
						},
						errorMessage: "Did not find the " + sViewName + " view"
					});
                },
                iSeeTheHelloDialog: function () {
					return this.waitFor({
						controlType: "sap.m.Dialog",
						success: function () {
							Opa5.assert.ok(true, "The Dialog was opened");
						},
						errorMessage: "Did not find the dialog control"
					});
				}
			}
		}
	});

});
