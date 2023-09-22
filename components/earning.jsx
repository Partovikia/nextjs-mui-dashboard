import React from "react";
import { Typography, Box } from "@mui/material";
function Earning() {
  return (
    <Box
      sx={{
        width: "60%",
        background: "#21222D",
        borderRadius: "20px",
        p: "5px",
        m: "5px",
      }}
    >
      <Typography variant="h2">Earnings</Typography>
      <Typography variant="h6">Total Expense</Typography>
      <Typography variant="h1">$6078.76</Typography>
    </Box>
  );
}

export default Earning;
