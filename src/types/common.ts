export type modalOpenType = (spectrUrl: string, label: string | null) => void;

export interface ITheme {
    palette: {
    primary: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
    secondary: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
    error: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
    warning: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
    info: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
    success: {
      light: string;
      main: string;
      dark: string;
      contrastText: string;
    };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    background: {
      paper: string;
      default: string;
      secondary: string
    };
  };
}

export interface IStyledProps {
  theme?: ITheme;
}
