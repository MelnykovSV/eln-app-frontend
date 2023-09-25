import Container from "./AttemptConditions.styled";
import TextField from "@mui/material/TextField";
import { getCurrentStage } from "../../redux/schemes/schemesSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useAppSelector } from "../../redux/hooks";
import {
  setAttemptInfo,
  setAttemptStatus,
} from "../../redux/schemes/schemesSlice";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputAdornment from "@mui/material/InputAdornment";
import useMediaQuery from "@mui/material/useMediaQuery";
import json2mq from "json2mq";

interface IAttemptInfoProps {
  attemptNumber: number;
}

const AttemptConditions = ({ attemptNumber }: IAttemptInfoProps) => {
  const {
    _yield,
    solvent,
    methodic,
    temp,
    time,
    startingMaterialMass,
    productMass,
    productPurity,
    type,
    isOk,
    notes,
  } = useAppSelector(getCurrentStage).attempts[attemptNumber - 1];

  const matches = useMediaQuery(
    json2mq({
      minWidth: 768,
      maxWidth: 1280,
    })
  );
  const dispatch = useAppDispatch();

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setAttemptInfo({
        [e.target.name]: e.target.value,
        attemptNumber: attemptNumber,
        fieldName: e.target.name,
      })
    );
  };
  const checkboxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setAttemptStatus({
        attemptNumber: attemptNumber,
      })
    );
  };

  return (
    <Container>
      <TextField
        label="Yield"
        className="input"
        name="_yield"
        value={_yield || ""}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
        type="number"
        disabled
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
      />
      <TextField
        className="input"
        label="Solvent"
        name="solvent"
        value={solvent || ""}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
      />

      <TextField
        className="input"
        label="Time"
        name="time"
        value={time || ""}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
      />
      <TextField
        className="input"
        label="Temperature"
        name="temp"
        value={temp || 0}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
        type="number"
        InputProps={{
          endAdornment: <InputAdornment position="end">&#8451;</InputAdornment>,
        }}
      />
      <TextField
        className="input"
        label="Starting Material Mass"
        name="startingMaterialMass"
        value={startingMaterialMass || 0}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
        type="number"
        InputProps={{
          endAdornment: <InputAdornment position="end">g</InputAdornment>,
        }}
      />
      <TextField
        className="input"
        label="Product Mass"
        name="productMass"
        value={productMass || 0}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
        type="number"
        InputProps={{
          endAdornment: <InputAdornment position="end">g</InputAdornment>,
        }}
      />
      <TextField
        className="input"
        label="Product Purity"
        name="productPurity"
        value={productPurity || 0}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
        type="number"
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
      />
      <TextField
        className="input input--big"
        label="Methodic"
        name="methodic"
        value={methodic || ""}
        variant="outlined"
        onChange={inputChangeHandler}
        size="medium"
        multiline
        rows={matches ? 6 : 8}
      />
      <TextField
        className="input input--big"
        label="Notes"
        name="notes"
        value={notes || ""}
        variant="outlined"
        onChange={inputChangeHandler}
        size="medium"
        multiline
        rows={matches ? 6 : 8}
      />
      <RadioGroup
        defaultValue="outlined"
        className="attempt-status-radio-group"
        name="type"
        value={type}
        onChange={inputChangeHandler}>
        <FormControlLabel
          value="test"
          className="attempt-status-radio"
          control={<Radio />}
          label="Test"
        />
        <FormControlLabel
          value="scaling"
          className="attempt-status-radio"
          control={<Radio />}
          label="Scaling"
        />
      </RadioGroup>

      {/* <Checkbox   color="success" /> */}
      <FormControlLabel
        control={
          <Checkbox
            name="isOk"
            color="success"
            // defaultChecked={isOk}
            checked={isOk}
            onChange={checkboxChangeHandler}
          />
        }
        label="Is attempt successful"
      />
    </Container>
  );
};

export default AttemptConditions;
