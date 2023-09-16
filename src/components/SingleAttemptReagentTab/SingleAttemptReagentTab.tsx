import Container from "./SingleAttemptReagentTab.styled";
import { SingleMolCanvas } from "../../ui";
import TextField from "@mui/material/TextField";
import { useAppDispatch } from "../../redux/hooks";
import { setAttemptReagentData } from "../../redux/schemes/schemesSlice";

interface IAttemptReagentTabProps {
  reagentNumber: 1 | 2 | 3 | 4;
  smiles: string | null;
  equivalents: number | null;
  molecularWeight: number | null;
  mass: number | null;
  attemptNumber: number | null;
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
      <TextField
        id="outlined-basic"
        label="Smiles"
        name="smiles"
        value={smiles || ""}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
      />
      <TextField
        id="outlined-basic"
        label="Equivalents"
        name="equivalents"
        value={equivalents || ""}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
        type="number"
      />
      <TextField
        id="outlined-basic"
        label="Molecular weight"
        name="molecularWeight"
        value={molecularWeight || ""}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
        type="number"
        disabled
      />
      <TextField
        id="outlined-basic"
        label="Mass"
        name="mass"
        value={mass || ""}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
        type="number"
      />
    </Container>
  );
};

export default SingleAttemptReagentTab;
