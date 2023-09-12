import Container from "./NewSchemePage.styled";
import { NewSchemeForm } from "../../modules";
import { Scheme } from "../../modules";
import { useState, useEffect } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { Dayjs } from "dayjs";
import { calculateSchemeYieldCoefficients } from "../../helpers/calculateSchemeYieldCoefficients";

import Switch from "@mui/material/Switch";
import Slide from "@mui/material/Slide";
import FormControlLabel from "@mui/material/FormControlLabel";
import { privateApi } from "../../api";

const blankStage = {
  product: "",
  solvent: "",
  temp: null,
  time: "",
  _yield: null,
  methodic: "",
};

const NewSchemePage = () => {
  const [startingMaterial, setStartingMaterial] = useState("");
  const [mass, setStartingMass] = useState("");
  const [price, setPrice] = useState("");
  const [deadline, setDeadline] = useState<string>("");
  const [stageNumber, setStageNumber] = useState(1);
  const [isSchemePreviewShown, setIsSchemePreviewShown] = useState(false);

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

  const schemeFormSubmitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log({
      startingMaterial,
      mass,
      price,
      deadline,
      stages,
    });

    const response = await privateApi.post("/api/schemes/", {
      startingMaterial,
      targetCompound: stages[stages.length - 1].product,
      mass,
      price,
      deadline,
      stages,
    });

    console.log(response);
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

  const toggleSchemePreview = () => {
    setIsSchemePreviewShown(!isSchemePreviewShown);
  };
  return (
    <Container className="container">
      <div className="utility-panel">
        <FormControlLabel
          className="toggle-schem-preview"
          control={
            <Switch
              checked={isSchemePreviewShown}
              onChange={toggleSchemePreview}
            />
          }
          label="Show scheme preview"
        />
      </div>
      <div className="new-scheme-content">
        <Slide
          direction="right"
          in={isSchemePreviewShown}
          mountOnEnter
          unmountOnExit
          className="slide">
          <div className="mobile-scheme-preview-container">
            <Scheme
              schemeData={calculateSchemeYieldCoefficients({
                startingMaterial,
                targetCompound,
                mass: Number(mass),
                stages,
              })}
            />
          </div>
        </Slide>

        <div className="scheme-preview-container">
          <Scheme
            schemeData={calculateSchemeYieldCoefficients({
              startingMaterial,
              targetCompound,
              mass: Number(mass),
              stages,
            })}
          />
        </div>

        <NewSchemeForm
          startingMaterial={startingMaterial}
          mass={mass}
          price={price}
          deadline={deadline}
          stageNumber={stageNumber}
          targetCompound={targetCompound}
          stages={stages}
          stageChangeHandler={stageChangeHandler}
          addStageHandler={addStageHandler}
          handleChange={handleChange}
          schemeFormSubmitHandler={schemeFormSubmitHandler}
          inputChangeHandler={inputChangeHandler}
          deadlineChangeHandler={deadlineChangeHandler}
        />
      </div>
    </Container>
  );
};

export default NewSchemePage;
