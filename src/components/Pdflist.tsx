'use client'
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export interface PDFItem {
  id: string;
  title: string;
  description: string;
  pdf_url: string;
  created_at: string;
}


const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Home() {
  const [pdfs, setPdfs] = useState<PDFItem[]>([]);
  const [selectedPdf, setSelectedPdf] = useState<PDFItem | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchPdfs = async () => {
      const { data, error } = await supabase.from("pdfs").select("*");

      if (error) {
        console.error("Error fetching PDFs:", error);
      } else {
        if (data) {
          setPdfs(data);
        }
      }
    };
    

    fetchPdfs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">PDF Library</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {pdfs.map((pdf) => (
          <div
            key={pdf.id}
            className="bg-white p-4 shadow-md rounded-lg cursor-pointer hover:shadow-lg transition"
            onClick={() => {
              console.log("Opening PDF:", pdf.pdf_url);
              setSelectedPdf(pdf);
            }}
          >
            <h2 className="text-xl font-semibold">{pdf.title}</h2>
            <p className="text-gray-600">{pdf.description}</p>
            <p className="text-gray-600">{pdf.created_at}</p>
          </div>
        ))}
      </div>
      
      

      {/* PDF Viewer Modal */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full relative">
            <button
              onClick={() => setSelectedPdf(null)}
              className="absolute top-3 right-3 bg-gray-300 hover:bg-gray-400 p-2 rounded"
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-2">{selectedPdf.title}</h2>
            <p className="text-gray-600 mb-4">{selectedPdf.description}</p>

            <div className="border p-4">
              <Document
                file={selectedPdf.pdf_url}
                onLoadSuccess={({ numPages }) => {
                  console.log("PDF Loaded, Pages:", numPages);
                  setNumPages(numPages);
                }}
                onLoadError={(error) => console.error("PDF Load Error:", error)}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              {/* <div className="flex justify-between mt-4">
                <button
                  onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
                  className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
                  disabled={pageNumber <= 1}
                >
                  Previous
                </button>
                <p>
                  Page {pageNumber} of {numPages}
                </p>
                <button
                  onClick={() =>
                    setPageNumber((prev) => Math.min(prev + 1, numPages ?? 1))
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
                  disabled={pageNumber >= (numPages ?? 1)}
                >
                  Next
                </button>
              </div> */}
              <a
                href="https://drive.google.com/file/d/1GD74HNlKoPBJ-7dx61crbzuMP-V2Tyuh/view?usp=sharing"
                download
                className="block mt-4 text-blue-600 text-center cursor-pointer"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
