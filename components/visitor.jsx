import data from "../data/data.js";
import { Box } from "@mui/material";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import React from "react";

function visitor({ VisitorChart }) {
  return (
    <Box
      sx={{
        background: "#21222D",
        borderRadius: "20px",
        height: "300px",
        width: "756px",
        p: "5px",
        m: "5px",
      }}
    >
      <Line data={VisitorChart} />;
    </Box>
  );
}

export default visitor;
