import Container from "./NewSchemeForm.styled";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import dayjs, { Dayjs } from "dayjs";
import { nanoid } from "nanoid";
import { NewStageTab } from "../../components";

import { SingleMolCanvas } from "../../ui";
import { Scheme } from "../";
import { calculateSchemeYieldCoefficients } from "../../helpers/calculateSchemeYieldCoefficients";

const blankStage = {
  product: "",
  solvent: "",
  temp: null,
  time: "",
  _yield: null,
  methodic: "",
};

const NewSchemeForm = () => {
  const [startingMaterial, setStartingMaterial] = useState("");
  const [mass, setStartingMass] = useState("" as string);
  const [price, setPrice] = useState("");
  const [deadline, setDeadline] = useState<string>("");
  const [stageNumber, setStageNumber] = useState(1);

  const [targetCompound, setTargetCompound] = useState("");
  const [stages, setStages] = useState([
    {
      ...blankStage,
    },
  ]);

  useEffect(() => {
    setTargetCompound(stages[stages.length - 1].product);
  }, [stages]);

  const stageChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    stageNumber: number
  ) => {
    setStages(
      [...stages].map((item, i) => {
        if (stageNumber - 1 === i) {
          return { ...stages[i], [e.target.name]: e.target.value };
        } else {
          return item;
        }
      })
    );
  };

  const addStageHandler = () => {
    setStages([...stages, { ...blankStage }]);

    setStageNumber(stageNumber + 1);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setStageNumber(Number(event.target.value) as number);
  };

  const names = {
    startingMaterial: setStartingMaterial,
    mass: setStartingMass,
    price: setPrice,
  };

  const schemeFormSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      startingMaterial,
      mass,
      price,
      deadline,
      stages,
    });
  };

  const inputChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name as keyof typeof names;
    names[name](e.target.value);
  };

  const deadlineChangeHandler = (value: Dayjs | null) => {
    if (value) {
      setDeadline(value.format("DD.MM.YYYY"));
    }
  };
  return (
    <Container onSubmit={schemeFormSubmitHandler}>
      <SingleMolCanvas smiles={startingMaterial} />
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

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          slotProps={{ textField: { size: "medium" } }}
          label="Deadline"
          className="datepicker"
          disablePast
          onChange={deadlineChangeHandler}
          minDate={dayjs().add(1, "day")}
          maxDate={dayjs().add(999, "day")}
        />
      </LocalizationProvider>

      <Button type="button" onClick={addStageHandler}>
        Add stage
      </Button>

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

      <Button type="submit">Submit</Button>

      <Scheme
        schemeData={calculateSchemeYieldCoefficients({
          startingMaterial,
          targetCompound,
          // totalYieldCoefficient: 0.3,
          mass: Number(mass),
          stages,
        })}
      />
    </Container>
  );
};

export default NewSchemeForm;
