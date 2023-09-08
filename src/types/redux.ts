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

export interface IUserPayload {
  user: {
    userName: string;
    email: string;
    avatarURL: string | null;
  };
  accessToken: string;
  refreshToken: string;
}

export interface ISignUpData {
  userName: string;
  email: string;
  password: string;
}
