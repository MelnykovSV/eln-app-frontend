import { IReactionPreviewData } from "./componentsProps";
export interface IAuthState {
  user: {
    userName: string | null;
    email: string | null;
    avatarURL: string | null;
  };
  accessToken: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean;
  status: "idle" | "pending" | "fulfilled" | "rejected";
  isLoading: boolean;
  error: string | null;
}
export interface IStage {
  product: string | null;
  _yield: number | null;
  solvent: string | null;
  methodic: string | null;
  temp: number | null;
  time: string | null;
  _id: string | null;
  startingMaterial: string | null;
  testSuccess: boolean;
  scalingSuccess: boolean;
  attempts: [];
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
export interface ICurrentStage {
  _id: string | null;
  startingMaterial: string | null;
  targetCompound: string | null;
  testSuccess: boolean;
  scalingSuccess: boolean;
  attempts: [];
}

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
export interface ISchemesState {
  schemePreviews: IReactionPreviewData[];
  currentScheme: ICurrentScheme;
  currentStage: IStage;
  status: string;
  isLoading: boolean;
  error: null | string;
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
