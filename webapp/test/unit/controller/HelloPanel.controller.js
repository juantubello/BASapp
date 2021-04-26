/*global QUnit*/

sap.ui.define([
	"firstbassapp/firstapp/controller/HelloPanel.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View1 Controller");

	QUnit.test("HelloPanel", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
