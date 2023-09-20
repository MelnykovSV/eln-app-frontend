import Container from "./AttemptSpectra.styled";
import { useDropzone } from "react-dropzone";
import { privateApi } from "../../api";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import test from "./test.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface IAttemptSpectraProps {
  attemptNumber: number;
}

// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "row",
//     backgroundColor: "#E4E4E4",
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
// });

const AttemptSpectra = ({ attemptNumber }: IAttemptSpectraProps) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file: File) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));
  const [file, setFile] = useState(null);

  const fileFormSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      label: (e.target as HTMLFormElement).label.value,
      spectr: acceptedFiles[0],
      attemptNumber,
    });

    const formData = new FormData();
    formData.append("spectr", acceptedFiles[0]);
    formData.append("label", (e.target as HTMLFormElement).label.value);
    formData.append("attemptNumber", attemptNumber.toString());

    const response = await privateApi.patch("/api/schemes/spectr", formData);
    setFile(response.data);

    // console.log(response.data);
  };
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  const downloadFileHandler = async () => {
    const response = await privateApi
      .get("/api/schemes/spectr", {
        responseType: "blob",
      })
      .then((blob) => {
        console.log(blob);
        const url = window.URL.createObjectURL(blob.data);
        console.log(url);
        const a = document.createElement("a");
        a.href = url;
        a.download = "test.pdf";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      });

    //   .then((blob) => {
    //     console.log(blob);
    //     const url = window.URL.createObjectURL(blob.data);
    //     console.log(url);
    //     const a = document.createElement("a");
    //     a.href = url;
    //     a.download = blob.data;
    //     document.body.appendChild(a);
    //     a.click();
    //     window.URL.revokeObjectURL(url);
    //   });

    // console.log(response.data.file.data);

    // const blob = new Blob(response.data.file.data, { type: "application/pdf" });

    // console.log(blob);

    // const url = window.URL.createObjectURL(blob.data);
    // console.log(url);
    // const a = document.createElement("a");
    // a.href = url;
    // a.download = blob.data;
    // document.body.appendChild(a);
    // a.click();
    // window.URL.revokeObjectURL(url);
  };

  return (
    <Container>
      <form onSubmit={fileFormSubmitHandler}>
        <section className="container">
          <div
            {...getRootProps({ className: "dropzone" })}
            style={{ height: "400px" }}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
          <aside>
            <h4>Files</h4>
            <ul>{files}</ul>
          </aside>
        </section>
        <input type="text" name="label" />

        <button type="submit">Submit file</button>
      </form>
      {/* {file ? (
       
      ) : null} */}
      {/* <a href="http://localhost:3000/spectra/test.pdf" download>
        PDF
      </a> */}

      <button type="button" onClick={downloadFileHandler}>
        PDF
      </button>

      <div>
        <Document
          file="http://localhost:3000/spectra/test.pdf"
          onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>

      {/* <Document
        file="http://localhost:3000/spectra/test.pdf"
        onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document> */}
    </Container>
  );
};

export default AttemptSpectra;
