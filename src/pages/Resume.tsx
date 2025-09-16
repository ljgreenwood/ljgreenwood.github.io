// Resume.tsx
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = "./pdf.worker.min.mjs";

export default function Resume() {
  const [numPages, setNumPages] = useState<number>(0);

  return (
    <div className="flex justify-center w-full px-2 bg-white">
      <Document
        file="/webresume.pdf"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={<p>Loading PDF…</p>}
        className="flex flex-col items-center bg-white"
      >
        {Array.from({ length: numPages }, (_, i) => (
          <div key={i} className="bg-white shadow-md rounded-lg mb-4">
            <Page
              pageNumber={i + 1}
              width={Math.min(window.innerWidth - 32, 800)}
              className="max-w-full h-auto"
            />
          </div>
        ))}
      </Document>
    </div>
  );
}
