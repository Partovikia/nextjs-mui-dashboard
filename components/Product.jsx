import React from "react";
import { data } from "../data/data.js";
import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const Product = () => {
  return (
    <Box
      sx={{
        background: "#21222D",
        borderRadius: "10px",
        height: "376px",
        p: "5px",
        m: "5px",
        width: "56%",
      }}
    >
      {/* <h1>Recent Orders</h1>
      <ul>
        {data.map((order, id) => (
          <li
            key={id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
          >
            <div className="bg-purple-100 rounded-lg p-3"></div>
            <div className="pl-4">
              <p className="text-gray-800 font-bold">${order.total}</p>
              <p className="text-gray-400 text-sm">{order.name.first}</p>
            </div>
            <p className="lg:flex md:hidden absolute right-6 text-sm">
              {order.date}
            </p>
          </li>
        ))}
      </ul> */}
      <List
        sx={{
          m: "10px 0",
          p: "15px",
          bgcolor: "#21222D",
        }}
      >
        <Typography variant="h2">Top Product</Typography>
        <ListItem alignItems="flex-start">
          <ListItemText primary="#" sx={{ textAlign: "left" }} />
          <ListItemText primary="Name" sx={{ textAlign: "center" }} />
          <ListItemText primary="Popularity" sx={{ textAlign: "left" }} />
          <ListItemText primary="Sales" sx={{ textAlign: "left" }} />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText primary="01" />
          <ListItemText primary="Home Decore Range" />
          <ListItemText primary="Popularity" />
          <Typography
            variant="h6"
            sx={{
              color: "#CB974F",
              border: "#CB974F 1px solid",
              background: "#3B3432",
              borderRadius: "5px",
              p: "5px",
            }}
          >
            46%
          </Typography>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText primary="02" />
          <ListItemText primary="Disney Princess" />
          <ListItemText primary="Popularity" />
          <Typography
            variant="h6"
            sx={{
              color: "#54686D",
              border: "#54686D 1px solid",
              background: "#313942",
              borderRadius: "5px",
              p: "5px",
            }}
          >
            17%
          </Typography>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText primary="03" />
          <ListItemText primary="Bathroom Essentials" />
          <ListItemText primary="Popularity" />
          <Typography
            variant="h6"
            sx={{
              color: "#28AEF3",
              border: "#28AEF3 1px solid",
              background: "#223345",
              borderRadius: "5px",
              p: "5px",
            }}
          >
            19%
          </Typography>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText primary="04" />
          <ListItemText primary="Apple Smartwatch" />
          <ListItemText primary="Popularity" />
          <Typography
            variant="h6"
            sx={{
              color: "#A389A5",
              border: "#A389A5 1px solid",
              background: "#3A3644",
              borderRadius: "5px",
              p: "5px",
            }}
          >
            20%
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default Product;
