const { jsPDF } = require("jspdf");

const addModules = require("./modules");

class ModifiedJspPdf extends jsPDF {
  constructor(...options) {
    super(...options);
    addModules(this);
  }
}

module.exports = ModifiedJspPdf;
