import Container from "./StageInfo.styled";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  getCurrentStageStartingMaterial,
  getCurrentStageProduct,
  getCurrentStageAttempts,
  getCurrentStage,
} from "../../redux/schemes/schemesSlice";
import {
  SingleMolCanvas,
  SingleArrow,
  DNALoaderMedium,
  CheckMark,
  DNALoaderSmall,
} from "../../ui";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { nanoid } from "nanoid";
import { SelectChangeEvent, Button, Select } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  getIsLoadingSchemes,
  getCurrentSchemeId,
  addAttempt,
} from "../../redux/schemes/schemesSlice";

interface IStageInfoProps {
  attemptNumber: number;
  handleAttemptNumberChange: (event: SelectChangeEvent) => void;
  getLastAttempt: () => void;
  saveHandler: () => void;
}

const StageInfo = ({
  attemptNumber,
  handleAttemptNumberChange,
  getLastAttempt,
  saveHandler,
}: IStageInfoProps) => {
  const startingMaterial = useAppSelector(getCurrentStageStartingMaterial);
  const product = useAppSelector(getCurrentStageProduct);
  const attempts = useAppSelector(getCurrentStageAttempts);
  const currentStage = useAppSelector(getCurrentStage);
  const dispatch = useAppDispatch();
  const matches = useMediaQuery("(min-width:768px)");
  const isLoadingSchemes = useAppSelector(getIsLoadingSchemes);
  const currentSchemeId = useAppSelector(getCurrentSchemeId);

  const isLoading = useAppSelector(getIsLoadingSchemes);

  return (
    <Container>
      <div
        className={
          matches ? "canvas-container" : "canvas-container visually-hidden"
        }>
        {isLoadingSchemes && !currentSchemeId ? (
          <DNALoaderMedium />
        ) : (
          <>
            <SingleMolCanvas
              smiles={startingMaterial}
              options={{
                width: 200,
                height: 200,
              }}
            />
            <SingleArrow />

            <SingleMolCanvas
              smiles={product}
              options={{
                width: 200,
                height: 200,
              }}
            />
          </>
        )}
      </div>
      <div
        className={
          matches
            ? "canvas-container-mobile visually-hidden"
            : "canvas-container-mobile"
        }>
        {isLoadingSchemes && !currentSchemeId ? (
          <DNALoaderMedium />
        ) : (
          <>
            <SingleMolCanvas
              smiles={startingMaterial}
              options={{
                width: 120,
                height: 120,
              }}
            />
            <SingleArrow />

            <SingleMolCanvas
              smiles={product}
              options={{
                width: 120,
                height: 120,
              }}
            />
          </>
        )}
      </div>

      <div className="stage-wrapper">
        <FormControl className="stage-info-select-container" fullWidth>
          <InputLabel id="stage-info-select-label">Select attempt</InputLabel>
          <Select
            labelId="stage-info-select-label"
            id="demo-simple-select"
            value={attemptNumber.toString()}
            label="Attempt"
            onChange={handleAttemptNumberChange}>
            {attempts.map((attempt, i) => (
              <MenuItem value={i + 1} key={nanoid()}>
                Experiment {i + 1}
                {attempt.isOk ? <CheckMark /> : null}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div className="stage-info-button-container">
          <Button
            onClick={() => {
              dispatch(addAttempt());
              getLastAttempt();
            }}
            variant="contained">
            Add experiment
          </Button>
          <Button
            type="button"
            onClick={saveHandler}
            variant="contained"
            color="primary"
            disabled={!currentStage.isChanged || isLoading ? true : false}>
            Save stage data
            {isLoading ? <DNALoaderSmall /> : null}
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default StageInfo;
