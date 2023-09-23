import Container from "./AttemptNotes.styled";
import { getCurrentStage } from "../../redux/schemes/schemesSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useAppSelector } from "../../redux/hooks";
import { setAttemptInfo } from "../../redux/schemes/schemesSlice";
import TextField from "@mui/material/TextField";

interface IAttemptNotesProps {
  attemptNumber: number;
}

const AttemptNotes = ({ attemptNumber }: IAttemptNotesProps) => {
  const dispatch = useAppDispatch();
  const { notes } = useAppSelector(getCurrentStage).attempts[attemptNumber - 1];
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setAttemptInfo({
        [e.target.name]: e.target.value,
        attemptNumber: attemptNumber,
        fieldName: e.target.name,
      })
    );
  };
  return (
    <Container>
      <TextField
        label="Notes"
        name="notes"
        value={notes || ""}
        variant="outlined"
        onChange={inputChangeHandler}
        size="medium"
      />
    </Container>
  );
};

export default AttemptNotes;
