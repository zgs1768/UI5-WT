sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/ui/core/routing/History',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
  ],
  (Controller, History, MessageToast, JSONModel) => {
    'use strict'

    return Controller.extend('invoicescan.invoicescan.controller.Detail', {
      onInit() {
        // const oViewModel = new JSONModel({
        //   currency: 'EUR',
        // })
        // this.getView().setModel(oViewModel, 'view')

        // const oRouter = this.getOwnerComponent().getRouter()
        // oRouter
        //   .getRoute('detail')
        //   .attachPatternMatched(this.onObjectMatched, this)
      },

      onObjectMatched(oEvent) {
        // this.getView().bindElement({
        //   path:
        //     '/' +
        //     window.decodeURIComponent(
        //       oEvent.getParameter('arguments').invoicePath
        //     ),
        //   model: 'Employees',
        // })
      },

      onreturnPress() {
        const oHistory = History.getInstance()
        const sPreviousHash = oHistory.getPreviousHash()

        if (sPreviousHash !== undefined) {
          window.history.go(-1)
        } else {
          const oRouter = this.getOwnerComponent().getRouter()
          oRouter.navTo('', {}, true)
        }
      },
    })
  }
)
