import Container from "./AttemptConditions.styled";
import TextField from "@mui/material/TextField";
import { getCurrentStage } from "../../redux/schemes/schemesSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useAppSelector } from "../../redux/hooks";
import {
  setAttemptInfo,
  setAttemptStatus,
} from "../../redux/schemes/schemesSlice";
// import RadioGroup from "@mui/joy/RadioGroup";
// import Radio from "@mui/joy/Radio";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

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
  } = useAppSelector(getCurrentStage).attempts[attemptNumber - 1];

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
        name="_yield"
        value={_yield || ""}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
        type="number"
        disabled
      />
      <TextField
        label="Solvent"
        name="solvent"
        value={solvent || ""}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
      />
      <TextField
        label="Methodic"
        name="methodic"
        value={methodic || ""}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
      />
      <TextField
        label="Time"
        name="time"
        value={time || ""}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
      />
      <TextField
        label="Temperature"
        name="temp"
        value={temp || ""}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
        type="number"
      />
      <TextField
        label="Starting Material Mass"
        name="startingMaterialMass"
        value={startingMaterialMass || ""}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
        type="number"
      />
      <TextField
        label="Product Mass"
        name="productMass"
        value={productMass || ""}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
        type="number"
      />
      <TextField
        label="Product Purity"
        name="productPurity"
        value={productPurity || ""}
        variant="outlined"
        onChange={inputChangeHandler}
        size="small"
        type="number"
      />
      <RadioGroup
        defaultValue="outlined"
        name="type"
        value={type}
        onChange={inputChangeHandler}>
        <FormControlLabel value="test" control={<Radio />} label="Test" />
        <FormControlLabel value="scaling" control={<Radio />} label="Scaling" />
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
