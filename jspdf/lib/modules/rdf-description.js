exports.jspdf = `<rdf:Description rdf:about="" xmlns:jspdf="http://jspdf.default.namespaceuri/"></rdf:Description>`;

exports.minimal = `
<rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <dc:format>application/pdf</dc:format>
</rdf:Description>
`;

exports.full = `
<rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <dc:format>application/pdf</dc:format>
  <dc:title>
    <rdf:Alt>
      <rdf:li xml:lang="x-default"></rdf:li>
    </rdf:Alt>
  </dc:title>
  <dc:creator>
    <rdf:Seq>
      <rdf:li></rdf:li>
    </rdf:Seq>
  </dc:creator>
  <dc:description>
    <rdf:Alt>
      <rdf:li xml:lang="x-default"></rdf:li>
    </rdf:Alt>
  </dc:description>
  <dc:subject>
    <rdf:Bag>
      <rdf:li></rdf:li>
    </rdf:Bag>
  </dc:subject>
</rdf:Description>
<rdf:Description rdf:about="" xmlns:xmp="http://ns.adobe.com/xap/1.0/">
  <xmp:CreateDate>2020-03-30T09:53:47+02:00</xmp:CreateDate>
  <xmp:CreatorTool></xmp:CreatorTool>
  <xmp:ModifyDate>2020-03-30T09:53:47+02:00</xmp:ModifyDate>
  <xmp:MetadataDate>2020-03-30T09:53:47+02:00</xmp:MetadataDate>
</rdf:Description>
<rdf:Description rdf:about="" xmlns:pdf="http://ns.adobe.com/pdf/1.3/">
  <pdf:Keywords></pdf:Keywords>
  <pdf:Producer>TCPDF 6.3.5 (http://www.tcpdf.org)</pdf:Producer>
</rdf:Description>
<rdf:Description rdf:about="" xmlns:xmpMM="http://ns.adobe.com/xap/1.0/mm/">
  <xmpMM:DocumentID>uuid:2e1afe1b-eb37-40ed-7be6-25e1c78c6688</xmpMM:DocumentID>
  <xmpMM:InstanceID>uuid:2e1afe1b-eb37-40ed-7be6-25e1c78c6688</xmpMM:InstanceID>
</rdf:Description>
<rdf:Description rdf:about="" xmlns:pdfaExtension="http://www.aiim.org/pdfa/ns/extension/" xmlns:pdfaSchema="http://www.aiim.org/pdfa/ns/schema#" xmlns:pdfaProperty="http://www.aiim.org/pdfa/ns/property#">
  <pdfaExtension:schemas>
    <rdf:Bag>
      <rdf:li rdf:parseType="Resource">
        <pdfaSchema:namespaceURI>http://ns.adobe.com/pdf/1.3/</pdfaSchema:namespaceURI>
        <pdfaSchema:prefix>pdf</pdfaSchema:prefix>
        <pdfaSchema:schema>Adobe PDF Schema</pdfaSchema:schema>
        <pdfaSchema:property>
          <rdf:Seq>
            <rdf:li rdf:parseType="Resource">
              <pdfaProperty:category>internal</pdfaProperty:category>
              <pdfaProperty:description>Adobe PDF Schema</pdfaProperty:description>
              <pdfaProperty:name>InstanceID</pdfaProperty:name>
              <pdfaProperty:valueType>URI</pdfaProperty:valueType>
            </rdf:li>
          </rdf:Seq>
        </pdfaSchema:property>
      </rdf:li>
      <rdf:li rdf:parseType="Resource">
        <pdfaSchema:namespaceURI>http://ns.adobe.com/xap/1.0/mm/</pdfaSchema:namespaceURI>
        <pdfaSchema:prefix>xmpMM</pdfaSchema:prefix>
        <pdfaSchema:schema>XMP Media Management Schema</pdfaSchema:schema>
        <pdfaSchema:property>
          <rdf:Seq>
            <rdf:li rdf:parseType="Resource">
              <pdfaProperty:category>internal</pdfaProperty:category>
              <pdfaProperty:description>UUID based identifier for specific incarnation of a document</pdfaProperty:description>
              <pdfaProperty:name>InstanceID</pdfaProperty:name>
              <pdfaProperty:valueType>URI</pdfaProperty:valueType>
            </rdf:li>
          </rdf:Seq>
        </pdfaSchema:property>
      </rdf:li>
      <rdf:li rdf:parseType="Resource">
        <pdfaSchema:namespaceURI>http://www.aiim.org/pdfa/ns/id/</pdfaSchema:namespaceURI>
        <pdfaSchema:prefix>pdfaid</pdfaSchema:prefix>
        <pdfaSchema:schema>PDF/A ID Schema</pdfaSchema:schema>
        <pdfaSchema:property>
          <rdf:Seq>
            <rdf:li rdf:parseType="Resource">
              <pdfaProperty:category>internal</pdfaProperty:category>
              <pdfaProperty:description>Part of PDF/A standard</pdfaProperty:description>
              <pdfaProperty:name>part</pdfaProperty:name>
              <pdfaProperty:valueType>Integer</pdfaProperty:valueType>
            </rdf:li>
            <rdf:li rdf:parseType="Resource">
              <pdfaProperty:category>internal</pdfaProperty:category>
              <pdfaProperty:description>Amendment of PDF/A standard</pdfaProperty:description>
              <pdfaProperty:name>amd</pdfaProperty:name>
              <pdfaProperty:valueType>Text</pdfaProperty:valueType>
            </rdf:li>
            <rdf:li rdf:parseType="Resource">
              <pdfaProperty:category>internal</pdfaProperty:category>
              <pdfaProperty:description>Conformance level of PDF/A standard</pdfaProperty:description>
              <pdfaProperty:name>conformance</pdfaProperty:name>
              <pdfaProperty:valueType>Text</pdfaProperty:valueType>
            </rdf:li>
          </rdf:Seq>
        </pdfaSchema:property>
      </rdf:li>
    </rdf:Bag>
  </pdfaExtension:schemas>
</rdf:Description>
`;
