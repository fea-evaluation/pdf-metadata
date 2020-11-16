package evaluation.pdfbox;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.common.PDMetadata;

import java.io.*;
import java.nio.file.Paths;

public class Main {
  private static final String[] filePaths = new String[] { "valid.pdf" };

  public static void main(String[] args) {
    for (String filePath : filePaths) {
      try {
        System.out.println(filePath);
        readMetadata(Paths.get("resources", filePath).toFile());
      } catch (Exception e) {
        System.err.println("Caught error while reading");
        e.printStackTrace(System.err);
      }
    }
  }

  private static void readMetadata(File pdfContent) {
    if (pdfContent.exists()) {
      try (PDDocument doc = PDDocument.load(pdfContent)) {
        System.out.println(pdfContent.getAbsolutePath());
        System.out.println("  information: " + doc.getDocumentInformation());
        System.out.println("  version: " + doc.getVersion());
        PDMetadata metadata = doc.getDocumentCatalog().getMetadata();
        System.out.println("  metadata: " + metadata);
      } catch (Exception e) {
        e.printStackTrace(System.err);
      }
    } else {
      System.out.println(pdfContent.getAbsolutePath());
    }
  }
}
