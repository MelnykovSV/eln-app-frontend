import Container from "./SpectraListItem.styled";
import { useParams } from "react-router";
import { privateApi } from "../../api";
import { modalOpenType } from "../../types";
import Button from "@mui/material/Button";

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
  const { schemeId, stageId } = useParams() as {
    schemeId: string;
    stageId: string;
  };
  const downloadFileHandler = async () => {
    const blob = await privateApi.get(
      `/api/schemes/spectr/${schemeId}/${stageId}/${attemptNumber}/${_id}`,
      {
        responseType: "blob",
      }
    );
    const url = window.URL.createObjectURL(blob.data);
    const a = document.createElement("a");
    a.href = url;
    a.download = "test.pdf";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const spectrOpenHandler = () => {
    handleModalOpen(spectrUrl, label);
  };

  return (
    <Container>
      <p>{label || null}</p>
      <div className="spectr-button-container">
        <Button type="button" variant="contained" onClick={downloadFileHandler}>
          Download
        </Button>
        <Button type="button" variant="contained" onClick={spectrOpenHandler}>
          Open
        </Button>
      </div>
    </Container>
  );
};

export default SpectraListItem;
