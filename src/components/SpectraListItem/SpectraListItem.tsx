import Container from "./SpectraListItem.styled";
import { useParams } from "react-router";
// import { privateApi } from "../../api";
import { modalOpenType } from "../../types";
import Button from "@mui/material/Button";
import { useAppDispatch } from "../../redux/hooks";
import { deleteSpectr } from "../../redux/schemes/operations";

interface ISpectraListItemProps {
  spectrUrl: string;
  label: string | null;
  _id: string;
  attemptNumber: number;
  handleModalOpen: modalOpenType;
}

const SpectraListItem = ({
  spectrUrl,
  label,
  _id,
  attemptNumber,
  handleModalOpen,
}: ISpectraListItemProps) => {
  const { stageId } = useParams() as {
    stageId: string;
  };

  const dispatch = useAppDispatch();

  const deleteSpectrHandler = () => {
    dispatch(
      deleteSpectr({ attemptNumber, stageId, spectrId: _id, spectrUrl })
    );
  };

  const spectrOpenHandler = () => {
    handleModalOpen(spectrUrl, label);
  };

  return (
    <Container>
      <p>{label || null}</p>
      <div className="spectr-button-container">
        <Button
          type="button"
          variant="contained"
          href={spectrUrl.replace("/upload", "/upload/fl_attachment")}>
          Download
        </Button>
        <Button type="button" variant="contained" onClick={spectrOpenHandler}>
          Open
        </Button>
        <Button
          type="button"
          color="error"
          variant="contained"
          onClick={deleteSpectrHandler}>
          Delete
        </Button>
      </div>
    </Container>
  );
};

export default SpectraListItem;
