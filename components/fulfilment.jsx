import data from "../data/data.js";
import { Box } from "@mui/material";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import React from "react";

function FulFilment({ CustomerChart }) {
  return (
    <Box
      sx={{
        width: "40%",
        background: "#21222D",
        borderRadius: "20px",
        height: "376px",
        p: "5px",
        m: "5px",
      }}
    >
      <Line data={CustomerChart} />;
    </Box>
  );
}

export default FulFilment;
