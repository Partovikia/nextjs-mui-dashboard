import { Box } from "@mui/material";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@mui/material";
import theme from "../components/Theme";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <Sidebar />

          <Header />
        </Box>
      </ThemeProvider>
    </>
  );
}
