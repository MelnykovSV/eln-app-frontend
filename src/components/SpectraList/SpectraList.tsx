import * as S from "./SpectraList.styled";
import { useAppSelector } from "../../redux/hooks";
import { getCurrentStageAttempts } from "../../redux/schemes/schemesSlice";
import { SpectraListItem } from "../";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Document, Page, pdfjs } from "react-pdf";
import { DNALoader } from "../../ui";
import { Button } from "@mui/material";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
    <S.Container>
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
            <p className="text-container">{modalSpectrLabel}</p>
            <p className="pages">
              Page {pageNumber} of {numPages}
            </p>
            <div className="buttons-container">
              <Button
                type="button"
                variant="contained"
                onClick={prevPageHandler}
                disabled={pageNumber === 1}>
                Prev
              </Button>
              <Button
                type="button"
                variant="contained"
                onClick={nextPageHandler}
                disabled={pageNumber === numPages}>
                Next
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </S.Container>
  );
};

export default SpectraList;
