import * as S from "./SingleAttemptReagentTab.styled";
import { SingleMolCanvas } from "../../ui";
import TextField from "@mui/material/TextField";
import { useAppDispatch } from "../../redux/hooks";
import { setAttemptReagentData } from "../../redux/schemes/schemesSlice";
import InputAdornment from "@mui/material/InputAdornment";

interface IAttemptReagentTabProps {
  reagentNumber: 1 | 2 | 3 | 4;
  smiles: string | null;
  equivalents: number | null;
  molecularWeight: number | null;
  mass: number | null;
  attemptNumber: number;
}

const SingleAttemptReagentTab = ({
  reagentNumber,
  smiles,
  equivalents,
  molecularWeight,
  mass,
  attemptNumber,
}: IAttemptReagentTabProps) => {
  const dispatch = useAppDispatch();

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setAttemptReagentData({
        reagentNumber: reagentNumber,
        [e.target.name]: e.target.value,
        attemptNumber: attemptNumber,
        fieldName: e.target.name,
      })
    );
  };
  return (
    <S.Container>
      <SingleMolCanvas smiles={smiles} />
      <p>Reagent {reagentNumber}</p>
      <TextField
        className="reagent-input"
        label="Smiles"
        name="smiles"
        value={smiles || ""}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
      />
      <TextField
        className="reagent-input"
        label="Equivalents"
        name="equivalents"
        value={equivalents !== null ? equivalents : ""}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
        type="number"
      />
      <TextField
        className="reagent-input"
        label="Molecular weight"
        name="molecularWeight"
        value={molecularWeight || ""}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
        type="number"
        disabled
        InputProps={{
          endAdornment: <InputAdornment position="end">g/mol</InputAdornment>,
        }}
      />
      <TextField
        className="reagent-input"
        label="Mass"
        name="mass"
        value={mass || ""}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
        type="number"
        InputProps={{
          endAdornment: <InputAdornment position="end">g</InputAdornment>,
        }}
      />
    </S.Container>
  );
};

export default SingleAttemptReagentTab;
