import { createTheme } from "@mui/material";
import "@fontsource/roboto";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#25273C",
      mode: "light",
    },
    secondary: {
      main: "#fff",
    },
    third: {
      main: "#57ddaa",
    },
  },
  typography: {
    h1: {
      fontSize: 20,
      fontWeight: "600",
      fontFamily: "roboto",
      color: "#fff",
      letterSpacing: "1.05rem",
    },
    h2: {
      fontSize: 18,
      fontWeight: "500",
      fontFamily: "roboto",
      letterSpacing: ".05rem",
    },
  },
});

export default theme;
