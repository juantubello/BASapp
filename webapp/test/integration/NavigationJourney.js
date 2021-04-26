/*global QUnit*/

sap.ui.define([
    "firstbassapp/firstapp/localService/mockserver",
	"sap/ui/test/opaQunit",
	"./pages/HelloPanel"
], function (mockserver, opaTest) {
	"use strict";

	QUnit.module("Navigation Journey");

	opaTest("Should see the initial page of the app", function (Given, When, Then) {

        //Init the mock server
        mockserver.init();

		// Arrangements
		Given.iStartMyUIComponent({
            componentConfig: {
                name: "com.firstbassapp.firstapp",
                async: true
            }
        });

		// Actions
		When.onTheAppPage.iSayHelloDialogButton();

		//Assertions
        Then.onTheAppPage.iSeeTheHelloDialog();
        
        //Cleanup
        Then.iTeardownMyApp();
	});
});
