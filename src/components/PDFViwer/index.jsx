import { useState } from "react";
import { Document, Page } from "react-pdf";

import { Container, ZoomControls } from "./styles";

import pdfFile from "../../assets/Grade-Horaria_2024-2.pdf";

export default function PDFViwer() {
  const [numPages, setNumPages] = useState();
  const [scale, setScale] = useState(1.0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const zoomIn = () => setScale(scale + 0.2);
  const zoomOut = () => setScale(scale > 0.5 ? scale - 0.2 : scale);

  return (
    <Container>
      <ZoomControls>
        <button onClick={zoomOut}>-</button>
        <span>{Math.round(scale * 100)}%</span>
        <button onClick={zoomIn}>+</button>
      </ZoomControls>
      <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.apply(null, Array(numPages))
          .map((x, i) => i + 1)
          .map((page) => {
            return (
              <Page
                key={page}
                pageNumber={page}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                scale={scale}
              />
            );
          })}
      </Document>
    </Container>
  );
}
