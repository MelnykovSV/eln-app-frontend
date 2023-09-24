import Container from "./SingleAttemptReagentTab.styled";
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
    <Container>
      <SingleMolCanvas smiles={smiles} />
      <p>Reagent {reagentNumber}</p>
      <TextField
        label="Smiles"
        name="smiles"
        value={smiles || ""}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
      />
      <TextField
        label="Equivalents"
        name="equivalents"
        value={equivalents || 0}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
        type="number"
      />
      <TextField
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
        label="Mass"
        name="mass"
        value={mass || 0}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
        type="number"
        InputProps={{
          endAdornment: <InputAdornment position="end">g</InputAdornment>,
        }}
      />
    </Container>
  );
};

export default SingleAttemptReagentTab;
