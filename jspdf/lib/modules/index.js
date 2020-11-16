const addXmpMetadata = require("./xmp_metadata");

const modules = [addXmpMetadata];

function addModules(doc) {
  return modules.reduce((composed, addModule) => addModule(composed), doc);
}

module.exports = addModules;
