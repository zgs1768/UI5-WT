/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"invoice_scan/invoice_scan/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
