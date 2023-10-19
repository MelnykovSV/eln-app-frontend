import Container from "./NewStageTab.styled";
import { TextField } from "@mui/material";

import { SingleMolCanvas } from "../../ui";
import InputAdornment from "@mui/material/InputAdornment";

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
  areErrorsShown: boolean;
  stageChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    stageNumber: number
  ) => void;
}

const NewStageTab = ({
  stageData: { product, solvent, temp, time, _yield, methodic },
  stageNumber,
  stageChangeHandler,
  areErrorsShown,
}: IStageProps) => {
  return (
    <Container>
      <div className="new-stage-tab-first-block">
        <div className="new-stage-tab-first-block__inputs">
          <TextField
            label="Product*"
            name="product"
            variant="outlined"
            value={product}
            error={!product && areErrorsShown}
            className="input"
            onChange={(e) => {
              stageChangeHandler(e, stageNumber);
            }}
          />
          <TextField
            label="Solvent"
            name="solvent"
            variant="outlined"
            value={solvent}
            className="input"
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
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
            inputProps={{ min: 0 }}
          />
        </div>

        <div className="new-stage-tab-first-block__canvas-container">
          <SingleMolCanvas smiles={product} />
        </div>
      </div>
      <div className="new-stage-tab-second-block">
        <TextField
          label="Time"
          name="time"
          variant="outlined"
          value={time || ""}
          type="number"
          className="input"
          onChange={(e) => {
            stageChangeHandler(e, stageNumber);
          }}
          InputProps={{
            endAdornment: <InputAdornment position="end">h</InputAdornment>,
          }}
          inputProps={{ min: 0 }}
        />

        <TextField
          label="Temperature"
          name="temp"
          variant="outlined"
          value={temp || ""}
          type="number"
          className="input"
          onChange={(e) => {
            stageChangeHandler(e, stageNumber);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">&#8451;</InputAdornment>
            ),
          }}
          inputProps={{ min: 0 }}
        />
      </div>

      <TextField
        label="Methodic"
        name="methodic"
        variant="outlined"
        value={methodic}
        multiline
        className="input"
        rows={4}
        onChange={(e) => {
          stageChangeHandler(e, stageNumber);
        }}
      />
    </Container>
  );
};

export default NewStageTab;
