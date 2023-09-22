import React from "react";
import { Typography, Box } from "@mui/material";
import data from "../data/data.js";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Img from "next/image.js";
import ChartPng from "./img/chart.png";

function Earning() {
  return (
    <Box
      sx={{
        width: "35%",
        background: "#21222D",
        borderRadius: "10px",
        p: "10px",
        m: "5px",
        gap: "6px",
      }}
    >
      <Typography variant="h2">Earnings</Typography>
      <Typography variant="h5">Total Expense</Typography>
      <Typography variant="h1" sx={{ color: "#A9DFD8" }}>
        $6078.76
      </Typography>
      <Img src={ChartPng} />
      <Typography variant="h1">80%</Typography>
    </Box>
  );
}

export default Earning;
