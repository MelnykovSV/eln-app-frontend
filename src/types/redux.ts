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
export interface ISchemesState {
  schemePreviews: IReactionPreviewData[];
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

export interface IStage {
  product: string;
  _yield: number | null;
  methodic: string | null;
  temp: number | null;
  time: string | null;
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
