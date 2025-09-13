// ResumeViewer.tsx
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Load worker from CDN
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

export default function Resume() {
  const [numPages, setNumPages] = useState<number>(0);

  // const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
  //   setNumPages(numPages);
  // };

  return (
    //     <div className="w-screen h-screen bg-gray-100 flex flex-col">
    //   <div className="flex-1">
    //     <Document file="/webresume.pdf"></Document>
    //   </div>
    // </div>
    <div className="flex justify-center w-full overflow-x-hidden px-2">
      <Document
        file="/webresume.pdf"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={<p>Loading PDF…</p>}
        className="flex flex-col items-center"
      >
        {Array.from({ length: numPages }, (_, i) => (
          <Page
            key={i + 1}
            pageNumber={i + 1}
            width={Math.min(window.innerWidth - 32, 800)} // responsive cap
            className="shadow-md rounded-lg mb-4"
          />
        ))}
      </Document>
    </div>
  );
}

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
