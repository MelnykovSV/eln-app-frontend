import Container from "./NewSchemeForm.styled";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { nanoid } from "nanoid";
import { NewStageTab } from "../../components";
import { SingleMolCanvas } from "../../ui";
import { INewSchemeFormProps } from "../../types/componentsProps";

const NewSchemeForm = ({
  startingMaterial,
  mass,
  price,
  stageNumber,
  stages,
  stageChangeHandler,
  addStageHandler,
  handleChange,
  schemeFormSubmitHandler,
  inputChangeHandler,
  deadlineChangeHandler,
}: INewSchemeFormProps) => {
  return (
    <Container onSubmit={schemeFormSubmitHandler}>
      <div className="scheme-form-first-block">
        <div className="scheme-form-first-block__inputs-container">
          {" "}
          <TextField
            label="Starting Material"
            name="startingMaterial"
            variant="outlined"
            value={startingMaterial}
            onChange={inputChangeHandler}
          />
          <TextField
            label="Mass"
            name="mass"
            variant="outlined"
            type="number"
            value={mass}
            onChange={inputChangeHandler}
          />
          <TextField
            label="Price"
            name="price"
            variant="outlined"
            type="number"
            value={price}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="scheme-form-first-block__canvas-container">
          <SingleMolCanvas smiles={startingMaterial} />
        </div>
      </div>

      <div className="scheme-form-second-block">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            slotProps={{ textField: { size: "medium" } }}
            label="Deadline"
            className="datepicker"
            disablePast
            onChange={deadlineChangeHandler}
            minDate={dayjs().add(1, "day")}
            maxDate={dayjs().add(999, "day")}
            sx={{ width: "100%" }}
          />
        </LocalizationProvider>

        <div className="button-container">
          <Button type="button" onClick={addStageHandler} variant="contained">
            Add stage
          </Button>
        </div>
      </div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Stage</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={stageNumber.toString()}
          label="Stage"
          onChange={handleChange}>
          {stages.map((_, i) => (
            <MenuItem value={i + 1} key={nanoid()}>
              Stage {i + 1}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <NewStageTab
        stageData={stages[stageNumber - 1]}
        stageNumber={stageNumber}
        stageChangeHandler={stageChangeHandler}
      />

      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Container>
  );
};

export default NewSchemeForm;
