const { PDFDict, PDFName, PDFNumber, PDFRawStream } = require("pdf-lib");

const charCodes = (str) => str.split("").map((c) => c.charCodeAt(0));

const typedArrayFor = (str) => new Uint8Array(charCodes(str));

const whitespacePadding = new Array(20).fill(" ".repeat(100)).join("\n");

const addMetadataToDoc = (pdfDoc, options) => {
  const metadataXML = `
    <?xpacket begin="" id="W5M0MpCehiHzreSzNTczkc9d"?>
      <x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.2-c001 63.139439, 2010/09/27-13:37:26        ">
        <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">

          <rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/elements/1.1/">
            <dc:format>application/pdf</dc:format>
            <dc:creator>
              <rdf:Seq>
                <rdf:li>${options.author}</rdf:li>
              </rdf:Seq>
            </dc:creator>
            <dc:title>
               <rdf:Alt>
                  <rdf:li xml:lang="x-default">${options.title}</rdf:li>
               </rdf:Alt>
            </dc:title>
            <dc:subject>
              <rdf:Bag>
                ${options.keywords.map((keyword) => `<rdf:li>${keyword}</rdf:li>`).join("\n")}
              </rdf:Bag>
            </dc:subject>
          </rdf:Description>

          <rdf:Description rdf:about="" xmlns:xmp="http://ns.adobe.com/xap/1.0/">
            <xmp:CreatorTool>${options.creatorTool}</xmp:CreatorTool>
            <xmp:CreateDate>${options.documentCreationDate.toISOString()}</xmp:CreateDate>
            <xmp:ModifyDate>${options.documentModificationDate.toISOString()}</xmp:ModifyDate>
            <xmp:MetadataDate>${options.metadataModificationDate.toISOString()}</xmp:MetadataDate>
          </rdf:Description>

          <rdf:Description rdf:about="" xmlns:pdf="http://ns.adobe.com/pdf/1.3/">
            <pdf:Subject>${options.subject}</pdf:Subject>
            <pdf:Producer>${options.producer}</pdf:Producer>
          </rdf:Description>

        </rdf:RDF>
      </x:xmpmeta>
      ${whitespacePadding}
    <?xpacket end="w"?>
  `.trim();

  const metadataStreamDict = PDFDict.from(
    {
      Type: PDFName.from("Metadata"),
      Subtype: PDFName.from("XML"),
      Length: PDFNumber.fromNumber(metadataXML.length),
    },
    pdfDoc.index
  );

  const metadataStream = PDFRawStream.from(metadataStreamDict, typedArrayFor(metadataXML));

  const metadataStreamRef = pdfDoc.register(metadataStream);

  pdfDoc.catalog.set("Metadata", metadataStreamRef);
};

module.exports = addMetadataToDoc;
