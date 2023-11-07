import * as S from "./AttemptNotes.styled";
import {
  getCurrentStage,
  setAttemptInfo,
} from "../../redux/schemes/schemesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
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
    <S.Container>
      <TextField
        className="notes-input"
        label="Notes"
        name="notes"
        value={notes || ""}
        variant="outlined"
        onChange={inputChangeHandler}
        size="medium"
        multiline
        rows={8}
      />
    </S.Container>
  );
};

export default AttemptNotes;
