sap.ui.define([
    "sap/ui/core/mvc/Controller",'sap/ui/model/odata/v2/ODataModel'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,ODataModel ) {
        "use strict";

        return Controller.extend("invoicescan.invoicescan.controller.InvoiceList", {
            onInit: function () {

              this._oCustomSelect = this.byId("customSelect");
            },


  
            onPress(oEvent) {
                const oItem = oEvent.getSource()
                // const oRouter = this.getOwnerComponent().getRouter()
                // oRouter.navTo('detail'//, {
                //   // invoicePath: window.encodeURIComponent(
                //   //   oItem.getBindingContext('Employees').getPath().substr(1)
                //   // ),
                //   //invoicePath: `3`
                // //}
                // )
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("detail");

              },
        });
    });
