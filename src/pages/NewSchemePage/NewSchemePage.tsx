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
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
// import { updateIsLoadingSchemes } from "../../redux/schemes/schemesSlice";
import { useAppDispatch } from "../../redux/hooks";
import { addNewScheme } from "../../redux/schemes/operations";
import { IAddNewSchemePayload } from "../../redux/schemes/operations";

const blankStage = {
  startingMaterial: "",
  product: "",
  solvent: "",
  temp: null,
  time: "",
  _yield: null,
  methodic: "",
};

interface IStage {
  startingMaterial: string;
  product: string;
  solvent: string;
  temp: null | number;
  time: string;
  _yield: number | null;
  methodic: string;
}

const NewSchemePage = () => {
  const dispatch = useAppDispatch();
  const [startingMaterial, setStartingMaterial] = useState("");
  const [mass, setStartingMass] = useState("");
  const [price, setPrice] = useState("");
  const [deadline, setDeadline] = useState<string>("");
  const [stageNumber, setStageNumber] = useState(1);
  const [isSchemePreviewShown, setIsSchemePreviewShown] = useState(false);

  const [targetCompound, setTargetCompound] = useState("");
  const [stages, setStages] = useState<IStage[]>([
    {
      ...blankStage,
    },
  ]);

  useEffect(() => {
    setTargetCompound(stages[stages.length - 1].product);
  }, [stages]);
  const navigate = useNavigate();

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

  const repairNewSchemeArray = (arr: IStage[]) => {
    const result = arr.map((item, i, arr) => {
      if (i) {
        if (item.startingMaterial === arr[i - 1].product) {
          return item;
        }
        return { ...item, startingMaterial: arr[i - 1].product };
      }
      return item;
    });
    return result;
  };

  const addStageHandler = () => {
    const startingMaterial = stages[stages.length - 1].product;
    setStages([...stages, { ...blankStage, startingMaterial }]);

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

    if (
      !startingMaterial ||
      !targetCompound ||
      !mass ||
      !price ||
      stages.some((stage) => !stage.product)
    ) {
      toast.error("Fill all required fields!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    stages[0].startingMaterial = startingMaterial;

    const repairedStagesArray = repairNewSchemeArray(stages);

    console.log({
      startingMaterial,
      targetCompound:
        repairedStagesArray[repairedStagesArray.length - 1].product,
      mass,
      price,
      deadline,
      stages: repairedStagesArray,
    });

    const { payload } = (await dispatch(
      addNewScheme({
        startingMaterial,
        targetCompound:
          repairedStagesArray[repairedStagesArray.length - 1].product,
        mass,
        price,
        deadline,
        stages: repairedStagesArray,
      })
    )) as { payload: IAddNewSchemePayload };

    navigate(`/scheme/${payload._id}`);
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

        <div className="new-scheme-from-container">
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
      </div>
    </Container>
  );
};

export default NewSchemePage;
