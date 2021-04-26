/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
        "firstbassapp/firstapp/test/integration/NavigationJourney"
	], function () {
		QUnit.start();
	});
});
