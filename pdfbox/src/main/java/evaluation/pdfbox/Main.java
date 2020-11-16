package evaluation.pdfbox;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.common.PDMetadata;

import java.io.*;

public class Main {
    private static final String[] filePaths = new String[]{"valid_swisscom.pdf", "af__added_xpacket.pdf"};

    public static void main(String[] args) {
        for (String filePath : filePaths) {
            try {
                System.out.println(filePath);
                readMetadata(Main.class.getClassLoader().getResourceAsStream(filePath));
            } catch (Exception e) {
                System.err.println("Caught error while reading");
                e.printStackTrace(System.err);
            }
        }
    }

    private static void readMetadata(InputStream pdfContent) throws IOException {
        PDDocument doc = PDDocument.load(pdfContent);
        System.out.println("  information: "+ doc.getDocumentInformation());
        System.out.println("  version: "+ doc.getVersion());
        PDMetadata metadata = doc.getDocumentCatalog().getMetadata();
        System.out.println("  metadata: "+ metadata);
    }
}
