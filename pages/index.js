import { Box } from "@mui/material";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@mui/material";
import theme from "../components/Theme";
import Header from "@/components/Header";
import Product from "@/components/Product";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Sidebar />
          <Header />
        </Box>
      </ThemeProvider>
    </>
  );
}
