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

export interface IState {
  auth: IAuthState;
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
