import React from "react";
import { Typography, Box } from "@mui/material";

function visitor() {
  return (
    <Box
      sx={{
        width: "50%",
        background: "#21222D",
        borderRadius: "20px",
        p: "5px",
        m: "5px",
      }}
    >
      <Typography variant="h2">Visitor</Typography>
    </Box>
  );
}

export default visitor;
