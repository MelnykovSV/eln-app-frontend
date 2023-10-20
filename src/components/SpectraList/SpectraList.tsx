import Container from "./SpectraList.styled";
import { useAppSelector } from "../../redux/hooks";
import { getCurrentStageAttempts } from "../../redux/schemes/schemesSlice";
import { SpectraListItem } from "../";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Document, Page, pdfjs } from "react-pdf";
// import { StyleSheet } from "@react-pdf/renderer";
import { DNALoader } from "../../ui";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const style = StyleSheet.create({
//   page: {
//     width
//   }
//   // position: "absolute" as "absolute",
//   // top: "50%",
//   // left: "50%",
//   // transform: "translate(-50%, -50%)",
//   // width: 1200,
//   // bgcolor: "background.paper",
//   // border: "2px solid #000",
//   // boxShadow: 24,
//   // p: 4,
// });

interface IAttemptSpectraProps {
  attemptNumber: number;
}
const SpectraList = ({ attemptNumber }: IAttemptSpectraProps) => {
  const currentStageAttempts = useAppSelector(getCurrentStageAttempts);
  const spectra = currentStageAttempts[attemptNumber - 1].spectra;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSpectrUrl, setModalSpectrUrl] = useState<string | null>(null);
  const [modalSpectrLabel, setModalSpectrLabel] = useState<string | null>(null);

  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const prevPageHandler = () => {
    setPageNumber(pageNumber - 1);
  };

  const nextPageHandler = () => {
    setPageNumber(pageNumber + 1);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalSpectrUrl(null);
    setModalSpectrLabel(null);
    setPageNumber(1);
  };

  const handleModalOpen = (spectrUrl: string, label: string | null) => {
    setModalSpectrUrl(spectrUrl);
    setModalSpectrLabel(label);
    setIsModalOpen(true);
  };

  return (
    <Container>
      <ul>
        {spectra.map(({ spectrUrl, label, _id }) => (
          <SpectraListItem
            spectrUrl={spectrUrl}
            label={label}
            _id={_id}
            key={_id}
            attemptNumber={attemptNumber}
            handleModalOpen={handleModalOpen}
          />
        ))}
      </ul>

      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box>
          <div className="modal-body">
            <Document
              file={`${modalSpectrUrl}`}
              className="document"
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<DNALoader />}>
              <Page pageNumber={pageNumber} />
            </Document>
            <p>{modalSpectrLabel}</p>
            <p>
              Page {pageNumber} of {numPages}
            </p>
            <button
              type="button"
              onClick={prevPageHandler}
              disabled={pageNumber === 1}>
              Prev
            </button>
            <button
              type="button"
              onClick={nextPageHandler}
              disabled={pageNumber === numPages}>
              Next
            </button>
          </div>
        </Box>
      </Modal>
    </Container>
  );
};

export default SpectraList;
