sap.ui.define([
    "sap/ui/demo/nav/controller/BaseController"
], function (BaseController) {
    "use strict";

    return BaseController.extend("sap.ui.demo.nav.controller.employee.Employee", {
        onInit: function () {
            var oRouter = this.getRouter();
            oRouter.getRoute("employee").attachMatched(this._onRouteMatched, this);
            // Hint: we don't want to do it this way.
            /*
            oRouter.attachRouteMatched(function (oEvent) {
                var sRouteName, oArgs, oView;
                sRouteName = oEvent.getParameter("name");
                if(sRouteName === "employee"){
                    this._onRouteMatched(oEvent);
                }
            }, this);
            */
        },
        _onRouteMatched: function(oEvent) {
            var oArgs, oView;
            oArgs = oEvent.getParameter("arguments"); //Collect all arguments coming from the pattern
            oView = this.getView();

            oView.bindElement({
                path: "/Employees(" + oArgs.employeeId + ")", //Attaching the employee id collected from the URL parameter to the path
                events: {
                    change: this._onBindingChange.bind(this),
                    dataRequested: function (oEvent) {
                        oView.setBusy(true); // shows a busy indicator while oData loads the data from the Binding Context to the view.
                    },
                    dataReceived: function (oEvent) {
                        oView.setBusy(false); // Removes the busy indicator from the view.
                    }
                }
            });
        },
        _onBindingChange: function (oEvent) {
            // No data for this binding
            if (!this.getView().getBindingContext()) {
                this.getRouter().getTargets().display("notFound");
            }
        },
        onShowResume: function (oEvent) {
            var oCtx = this.getView().getBindingContext();

            this.getRouter().navTo("employeeResume", {
                employeeId: oCtx.getProperty("EmployeeID")
            });
        }
    });
});