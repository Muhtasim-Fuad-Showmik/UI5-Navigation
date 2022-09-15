sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController"
 ], function (BaseController) {
	"use strict";
 
	return BaseController.extend("sap.ui.demo.nav.controller.Home", {
		onPress: function () {
            var oRouter = this.getOwnerComponent().getRouter();
			console.log(oRouter);
            oRouter.navTo("sample");
        }
	});
	
 
 });