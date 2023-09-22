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
      fontSize: 24,
      fontWeight: "600",
      fontFamily: "roboto",
      color: "#fff",
    },
    h2: {
      fontSize: 19,
      fontWeight: "400",
      fontFamily: "roboto",
      letterSpacing: ".05rem",
    },
    h3: {
      fontSize: 16,
      fontWeight: "500",
      fontFamily: "roboto",
      letterSpacing: ".05rem",
    },
    h6: {
      fontSize: 13.5,
      fontWeight: "700",
      fontFamily: "roboto",
      letterSpacing: ".06rem",
    },
  },
});

export default theme;
