import { createTheme } from "@mui/material/styles";
// import createTheme

export const theme = createTheme({
  palette: {
    primary: {
      light: "#1976D2",
      main: "#2196F3",
      dark: "#0D47A1",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#9c27b0",
      main: "#ba68c8",
      dark: "#7b1fa2",
      contrastText: "#FFFFFF",
    },
    error: {
      light: "#F44336",
      main: "#FF5722",
      dark: "#E64A19",
      contrastText: "#FFFFFF",
    },
    warning: {
      light: "#FFC107",
      main: "#FFD740",
      dark: "#FFA000",
      contrastText: "#000000",
    },
    info: {
      light: "#2196F3",
      main: "#1976D2",
      dark: "#0D47A1",
      contrastText: "#FFFFFF",
    },
    success: {
      light: "#4CAF50",
      main: "#388E3C",
      dark: "#2E7D32",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      secondary: "#757575",
      disabled: "#BDBDBD",
    },
    background: {
      paper: "#FFFFFF",
      default: "#F5F5F5",
      secondary: "#FAFAFA",
    },
  },
});
