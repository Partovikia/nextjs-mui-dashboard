import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import InsertChartOutlinedTwoToneIcon from "@mui/icons-material/InsertChartOutlinedTwoTone";
import AudioFileOutlinedIcon from "@mui/icons-material/AudioFileOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import Grid from "@mui/material";
import { Bar } from "react-chartjs-2";
import Earning from "./Earning";
import Visitor from "./visitor";
import FulFilment from "./fulfilment";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Product from "./Product";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Content = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [customerData, setCustomerData] = useState({
    labels: ["", "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Last Month",
        data: [7000, 6000, 6800, 6900, 6600, 6800, 6900, 9000],
        backgroundColor: "rgb(256, 223, 200, 1",
        color: "rgb(256, 223, 200, 1",
      },
      {
        label: "This Month",
        data: [2000, 4000, 5000, 1000, 1500, 1900, 2400, 6500],
        backgroundColor: "rgb(169, 100, 216, 0.9",
        color: "rgb(169, 100, 216, 0.9",
      },
    ],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["", "", "", "", "", ""],
      datasets: [
        {
          label: "Volume",
          data: [18127, 22201, 19490, 17938, 24182, 17842],
          borderRadius: "5",
          backgroundColor: "rgb(169, 223, 216, 0.9",
        },
        {
          label: "Services",
        },
      ],
    });

    setChartOptions({
      plugins: {
        legend: {
          position: "bottom",
          borderRadius: "50%",
        },
        title: {
          display: true,
          text: "Level",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: "56%",
            display: "flex",
            flexWrap: "wrap",
            background: "#21222D",
            borderRadius: "10px",
            mt: "20px",
            p: "20px",
          }}
        >
          <Typography variant="h2" sx={{ width: "100%" }}>
            Today's Sales
          </Typography>
          <Typography variant="h3" sx={{ width: "100%" }}>
            Sales Summary
          </Typography>
          <Box
            sx={{
              background: "#171821",
              borderRadius: "10px",
              width: "21.5%",
              p: "20px",
              m: "10px",
            }}
          >
            <InsertChartOutlinedTwoToneIcon sx={{ color: "#FEB95A" }} />
            <Typography variant="h6">$5k</Typography>
            <Typography variant="h3">Total sales</Typography>
            <Typography sx={{ color: "#FEB95A" }} variant="h3">
              +10 from yesterday
            </Typography>
          </Box>
          <Box
            sx={{
              background: "#171821",
              borderRadius: "10px",
              width: "21.5%",
              p: "20px",
              m: "10px",
            }}
          >
            <AudioFileOutlinedIcon sx={{ color: "#A9DFD8" }} />
            <Typography variant="h6">500</Typography>
            <Typography variant="h3">Total Order</Typography>
            <Typography sx={{ color: "#A9DFD8" }} variant="h3">
              +8 from yesterday
            </Typography>
          </Box>
          <Box
            sx={{
              background: "#171821",
              borderRadius: "10px",
              width: "21.5%",
              p: "20px",
              m: "10px",
            }}
          >
            <WorkHistoryOutlinedIcon sx={{ color: "#847087" }} />
            <Typography variant="h6">9</Typography>
            <Typography variant="h3">Product Sold</Typography>
            <Typography sx={{ color: "#847087" }} variant="h3">
              +2 from yesterday
            </Typography>
          </Box>
          <Box
            sx={{
              background: "#171821",
              borderRadius: "10px",
              width: "21.5%",
              p: "20px",
              m: "10px",
            }}
          >
            <PersonAddAlt1OutlinedIcon sx={{ color: "#1E91CB" }} />
            <Typography variant="h6">12</Typography>
            <Typography variant="h3">New Customers</Typography>
            <Typography sx={{ color: "#1E91CB" }} variant="h3">
              +3 from yesterday
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "42%", m: "10px" }}>
          <Bar data={chartData} options={chartOptions} />
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: "1rem", width: "100%" }}>
        <Product />
        <FulFilment CustomerChart={customerData} />
      </Box>
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Earning />
        <Visitor />
      </Box>
    </>
  );
};

export default Content;
