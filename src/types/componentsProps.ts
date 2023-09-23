import { SelectChangeEvent } from "@mui/material/Select";
import { Dayjs } from "dayjs";
export interface ISingleMolCanvasProps {
  smiles: string | null;
  options?: {
    width: number;
    height: number;
  };
}

export interface IReactionPreviewData {
  _id: string;
  status: string; ///  понять, почему не работают литералы
  mass: number;
  price: number;
  deadline: string;
  stagesNumber: number;
  startingMaterial: string;
  targetCompound: string;
  createdAt: string;
  updatedAt: string;
}

export interface IReactionSchemePreviewProps {
  schemePreviewData: IReactionPreviewData;
}

export interface IDoubleArrowsProps {
  stagesNumber: number;
}

export interface ICustomSelectProps {
  currentSchemesType: string;
  schemesTypeSelectHandler: (event: SelectChangeEvent) => void;
}

export interface ISortingRadioGroupProps {
  sortingParam: string;
  sortingParamChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  sortingDireaction: string;
  sortingDireactionChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export interface ISearchTextInput {
  label: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ISynthesisSchemeStageProps {
  stageData: {
    _id?: string | null;
    solvent: string | null;
    temp: number | null;
    time: string | null;
    _yield: number | null;
    methodic: string | null;
    product: string | null;
    yieldCoefficient?: number;
    testSuccess?: boolean;
  };
  n: number;
  calculatedMass?: number | null;
  isCurrentStage: boolean;
}

export interface ISchemeProps {
  schemeData: {
    startingMaterial: string | null;
    targetCompound: string | null;
    mass: number | null;
    totalYieldCoefficient?: number;

    stages: {
      _id?: string | null;
      solvent: string | null;
      temp: number | null;
      time: string | null;
      _yield: number | null;
      methodic: string | null;
      product: string | null;
      yieldCoefficient?: number;
      testSuccess?: boolean;
    }[];
  };
}

export interface IReagentCardProps {
  reagentData: {
    smiles: string;
    mass: number;
    formula: string;
    molWeight: number;
    compoundName: string;
  };
}

export interface IReagentListProps {
  reagents: {
    smiles: string;
    mass: number;
    formula: string;
    molWeight: number;
    compoundName: string;
  }[];
}

export interface INewSchemeFormProps {
  startingMaterial: string;
  mass: string;
  price: string;
  stageNumber: number;
  deadline: string;
  targetCompound: string;
  stages: {
    solvent: string;
    temp: number | null;
    time: string;
    _yield: number | null;
    methodic: string;
    product: string;
    yieldCoefficient?: number;
  }[];
  stageChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    stageNumber: number
  ) => void;
  addStageHandler: () => void;
  handleChange: (event: SelectChangeEvent) => void;
  schemeFormSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  inputChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  deadlineChangeHandler: (value: Dayjs | null) => void;
}

export interface IRouteProps {
  children: React.ReactNode;
}
