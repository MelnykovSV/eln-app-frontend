import Container from "./StageInfo.styled";
import { useAppSelector } from "../../redux/hooks";
import {
  getCurrentStageStartingMaterial,
  getCurrentStageProduct,
  getCurrentStageAttempts,
} from "../../redux/schemes/schemesSlice";
import { SingleMolCanvas, SingleArrow } from "../../ui";
import { Select } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { nanoid } from "nanoid";
import { SelectChangeEvent } from "@mui/material";

interface IStageInfoProps {
  attemptNumber: number;
  handleAttemptNumberChange: (event: SelectChangeEvent) => void;
}

const StageInfo = ({
  attemptNumber,
  handleAttemptNumberChange,
}: IStageInfoProps) => {
  const startingMaterial = useAppSelector(getCurrentStageStartingMaterial);
  const product = useAppSelector(getCurrentStageProduct);
  const attempts = useAppSelector(getCurrentStageAttempts);

  return (
    <Container>
      <div className="canvas-container  ">
        <SingleMolCanvas smiles={startingMaterial} />
        <SingleArrow />

        <SingleMolCanvas smiles={product} />
      </div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Stage</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={attemptNumber.toString()}
          label="Attempt"
          onChange={handleAttemptNumberChange}>
          {attempts.map((_, i) => (
            <MenuItem value={i + 1} key={nanoid()}>
              Attempt {i + 1}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};

export default StageInfo;
