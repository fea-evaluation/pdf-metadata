const JsPdf = require("jspdf");

const addModules = require("./modules");

const ModifiedJspPdf = addModules(JsPdf);

module.exports = ModifiedJspPdf;
