const { writeFile } = require("fs");
const { PDFDocument, StandardFonts, rgb } = require("pdf-lib");

// Create a new PDFDocument
PDFDocument.create().then((pdfDoc) => {
  pdfDoc.embedFont(StandardFonts.TimesRoman).then((timesRomanFont) => {
    // Add a blank page to the document
    const page = pdfDoc.addPage();

    // Get the width and height of the page
    const { height } = page.getSize();

    // Draw a string of text toward the top of the page
    const fontSize = 30;
    page.drawText("Creating PDFs in JavaScript is awesome!", {
      x: 50,
      y: height - 4 * fontSize,
      size: fontSize,
      font: timesRomanFont,
      color: rgb(0, 0.53, 0.71),
    });

    pdfDoc.save().then((pdfBytes) => {
      writeFile("../resources/no-metadata.pdf-lib.pdf", pdfBytes, { encoding: "utf-8" }, console.error);
    });
  });
});
