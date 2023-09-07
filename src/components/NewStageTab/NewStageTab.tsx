import Container from "./NewStageTab.styled";
import { TextField } from "@mui/material";

import { SingleMolCanvas } from "../../ui";

interface IStage {
  product: string;
  solvent: string;
  temp: number | null;
  time: string;
  _yield: number | null;
  methodic: string;
}
interface IStageProps {
  stageData: IStage;
  stageNumber: number;
  stageChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    stageNumber: number
  ) => void;
}

const NewStageTab = ({
  stageData: { product, solvent, temp, time, _yield, methodic },
  stageNumber,
  stageChangeHandler,
}: IStageProps) => {
  return (
    <Container>
      <h2>Stage {stageNumber}</h2>
      <SingleMolCanvas smiles={product} />
      <TextField
        label="Product"
        name="product"
        variant="outlined"
        value={product}
        onChange={(e) => {
          stageChangeHandler(e, stageNumber);
        }}
      />
      <TextField
        label="Solvent"
        name="solvent"
        variant="outlined"
        value={solvent}
        onChange={(e) => {
          stageChangeHandler(e, stageNumber);
        }}
      />
      <TextField
        label="Methodic"
        name="methodic"
        variant="outlined"
        value={methodic}
        multiline
        rows={4}
        onChange={(e) => {
          stageChangeHandler(e, stageNumber);
        }}
      />

      <TextField
        label="Temperature"
        name="temp"
        variant="outlined"
        value={temp || ""}
        type="number"
        onChange={(e) => {
          stageChangeHandler(e, stageNumber);
        }}
      />
      <TextField
        label="Time"
        name="time"
        variant="outlined"
        value={time || ""}
        type="number"
        onChange={(e) => {
          stageChangeHandler(e, stageNumber);
        }}
      />
      <TextField
        label="Yield"
        name="_yield"
        variant="outlined"
        value={_yield || ""}
        type="number"
        onChange={(e) => {
          stageChangeHandler(e, stageNumber);
        }}
      />
    </Container>
  );
};

export default NewStageTab;
