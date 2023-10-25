import { IReactionPreviewData } from "./componentsProps";

//Stage page

export interface ISpectr {
  label: string | null;
  spectrUrl: string;
  _id: string;
}

export interface IAttemptReagent {
  reagentNumber: 1 | 2 | 3 | 4;
  smiles: string | null;
  equivalents: number | null;
  molecularWeight: number | null;
  mass: number | null;
}

export interface IAttempt {
  attemptNumber: number;
  _id?: string | null;
  _yield: number | null;
  solvent: string | null;
  methodic: string | null;
  temp: number | null;
  time: string | null;
  notes: string | null;
  startingMaterialMass: number | null;
  productMass: number | null;
  productPurity: number | null;
  type: "test" | "scaling";
  isOk: boolean;
  spectra: ISpectr[];
  reagents: IAttemptReagent[];
}

export interface IAuthState {
  user: {
    userName: string | null;
    email: string | null;
    avatarURL: string | null;
  };
  accessToken: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  status: "idle" | "pending" | "fulfilled" | "rejected";
  isLoading: boolean;
  error: { message: string | null; code: number | null };
}
export interface IStage {
  product: string | null;
  _yield: number | null;
  solvent: string | null;
  methodic: string | null;
  temp: number | null;
  time: string | null;
  _id: string | null;
  notes?: string | null;
  startingMaterial: string | null;
  testSuccess: boolean | null;
  scalingSuccess: boolean | null;
  isChanged: boolean;
  attempts: IAttempt[];
}

export interface ICurrentScheme {
  _id: string | null;
  status: string | null;
  mass: number | null;
  price: number | null;
  deadline: string | null;
  startingMaterial: string | null;
  targetCompound: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  stages: IStage[];
}

export interface IUpdatedCurrentScheme {
  _id: string | null;
  status: string | null;
  mass: number | null;
  price: number | null;
  deadline: string | null;
  startingMaterial: string | null;
  targetCompound: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  stages: {
    _id?: string | null;
    solvent: string | null;
    temp: number | null;
    time: string | null;
    _yield: number | null;
    methodic: string | null;
    product: string | null;
    yieldCoefficient: number;
  }[];
  totalYieldCoefficient: number;
}

export interface ISchemeData {
  _id: string | null;
  status: "active" | "success" | "fail";
  mass: number | null;
  price: number | null;
  deadline: string | null;
  startingMaterial: string | null;
  targetCompound: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  stagesNumber: number;
  stages: IStage[];
}

// export interface ICurrentStage {
//   _id: string | null;
//   startingMaterial: string | null;
//   targetCompound: string | null;
//   testSuccess: boolean;
//   scalingSuccess: boolean;
//   attempts: [];
// }

// export interface ISchemeData {
//   startingMaterial: string;
//   targetCompound: string;
//   mass: number;
//   totalYieldCoefficient?: number;
//   stages: {
//     solvent: string;
//     temp: number | null;
//     time: string | null;
//     _yield: number | null;
//     methodic: string;
//     product: string;
//     yieldCoefficient?: number;
//   }[];
// }
export interface IPageState {
  pathname: string;
  search: string;
  hash: string;
  key: string;
  state: null;
}
export interface ISchemesState {
  schemePreviews: IReactionPreviewData[];
  currentScheme: ICurrentScheme;
  currentStage: IStage;
  sortingParam: string;
  sortingDirection: string;
  searchSubstring: string;
  totalPages: number | null;
  currentPage: number | null;
  schemesState: IPageState | null;
  status: string;
  isSpectrUploading: boolean;
  isLoading: boolean;
  error: { message: string | null; code: number | null };
}

export interface IState {
  auth: IAuthState;
  schemes: ISchemesState;
}

export interface IRegisterUserPayload {
  user: {
    userName: string;
    email: string;
    avatarURL: string | null;
  };
}

export interface ILoginUserPayload {
  user: {
    userName: string;
    email: string;
    avatarURL: string | null;
  };
  accessToken: string;
  refreshToken: string;
}
export interface ICurrentUserPayload {
  userName: string;
  email: string;
  avatarURL: string | null;
}

export interface IRefreshPayload {
  accessToken: string;
  refreshToken: string;
}
export interface ISignUpData {
  userName: string;
  email: string;
  password: string;
}

export interface ISignInData {
  email: string;
  password: string;
}

export interface INewScheme {
  mass: number;
  price: number;
  deadline: string;
  startingMaterial: string;
  stages: IStage[];
}

export interface ISchemePreview {
  _id: string;
  status: string;
  mass: number;
  price: number;
  deadline: string;
  startingMaterial: string;
  targetCompound: string;
}
