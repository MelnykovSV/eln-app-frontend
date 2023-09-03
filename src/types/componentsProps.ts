import { SelectChangeEvent } from "@mui/material/Select";
export interface ISingleMolCanvasProps {
  smiles: string;
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
    solvent: string;
    temp: number;
    time: string;
    _yield: number;
    methodic: string;
    product: string;
  };
}

export interface ISchemeProps {
  schemeData: {
    startingMaterial: string;
    stages: {
      solvent: string;
      temp: number;
      time: string;
      _yield: number;
      methodic: string;
      product: string;
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

// export interface IReagentListProps {
//   reagents: {
//     smiles: string;
//     mass: number;
//     formula: string;
//     molWeight: number;
//     compoundName: string;
//   }[];
// }

export interface IReagentListProps {
  reagents: {
    smiles: string;
    mass: number;
  }[];
}
