import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface ITheme {
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
      };
      error: {
        light: string;
        main: string;
        dark: string;
      };
      warning: {
        light: string;
        main: string;
        dark: string;
      };
      info: {
        light: string;
        main: string;
        dark: string;
      };
      success: {
        light: string;
        main: string;
        dark: string;
      };
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
      background: {
        paper: string;
        default: string;
        secondary: string;
      };
    };
  }

  // allow configuration using `createTheme`
  interface ITheme extends ThemeOptions {}
  export function createTheme(options?: ITheme): CustomTheme;
}
