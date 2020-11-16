const { minimal: rdfDescription } = require("./rdf-description");

/**
 *
 * Based on the xmp_metadata module of jspdf: https://github.com/MrRio/jsPDF/blob/master/src/modules/xmp_metadata.js
 *
 * Changes:
 *  - Inserts the given metadata behind the <rfd> tag (see postPutRessources)
 *  - Surrounds the given metadata by with an <ehtstructured> tag (see postPutRessoucres)
 */

/**
 * @name xmp_metadata
 * @module
 */

function addModule(jsPDFAPI) {
  var postPutResources = function () {
    var xmpmeta_beginning =
      '<?xpacket begin="\ufeff" id="W5M0MpCehiHzreSzNTczkc9d"?><x:xmpmeta xmlns:x="adobe:ns:meta/">';
    var rdf_beginning = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">';
    var rdf_ending = "</rdf:RDF>";
    var xmpmeta_ending = '</x:xmpmeta><?xpacket end="w"?>';
    var utf8_xmpmeta_beginning = unescape(encodeURIComponent(xmpmeta_beginning));
    var utf8_rdf_beginning = unescape(encodeURIComponent(rdf_beginning));
    var utf8_metadata = `<ehtstructured>${unescape(
      encodeURIComponent(this.internal.__metadata__.metadata)
    )}</ehtstructured>`;
    var utf8_rdf_ending = unescape(encodeURIComponent(rdf_ending));
    var utf8_xmpmeta_ending = unescape(encodeURIComponent(xmpmeta_ending));
    var total_len =
      utf8_rdf_beginning.length +
      rdfDescription.length +
      utf8_metadata.length +
      utf8_rdf_ending.length +
      utf8_xmpmeta_beginning.length +
      utf8_xmpmeta_ending.length;
    this.internal.__metadata__.metadata_object_number = this.internal.newObject();
    this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + total_len + " >>");
    this.internal.write("stream");
    this.internal.write(
      utf8_xmpmeta_beginning +
        utf8_rdf_beginning +
        rdfDescription +
        utf8_rdf_ending +
        utf8_metadata +
        utf8_xmpmeta_ending
    );
    this.internal.write("endstream");
    this.internal.write("endobj");
  };
  var putCatalog = function () {
    if (this.internal.__metadata__.metadata_object_number) {
      this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R");
    }
  };
  /**
   * Adds XMP formatted metadata to PDF
   *
   * @name addMetadata
   * @function
   * @param {String} metadata The actual metadata to be added. The metadata shall be stored as XMP simple value. Note that if the metadata string contains XML markup characters "<", ">" or "&", those characters should be written using XML entities.
   * @param {String} namespaceuri Sets the namespace URI for the metadata. Last character should be slash or hash.
   * @returns {jsPDF} jsPDF-instance
   */
  jsPDFAPI.addMetadata = function (metadata, namespaceuri) {
    if (typeof this.internal.__metadata__ === "undefined") {
      this.internal.__metadata__ = {
        metadata: metadata,
        namespaceuri: namespaceuri || "http://jspdf.default.namespaceuri/",
      };
      this.internal.events.subscribe("putCatalog", putCatalog);
      this.internal.events.subscribe("postPutResources", postPutResources);
    }
    return this;
  };

  return jsPDFAPI;
}

module.exports = addModule;
