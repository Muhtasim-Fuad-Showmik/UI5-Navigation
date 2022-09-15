sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController"
 ], function (BaseController) {
	"use strict";
 
	return BaseController.extend("sap.ui.demo.nav.controller.Home", {
		onDisplayNotFound: function () {
			// display the "notFound" target without changing the hash.
			// Note: This is not navTo and therefore does not navigate to the page and only
			// displays the page without ever changing the hash.
			// this.getRouter().getTargets().display("notFound");

			this.getRouter().getTargets().display("notFound", {
				fromTarget: "home"
			});
		},
		onNavToEmployees: function () {
			this.getRouter().navTo("employeeList");
		}
	});
 });