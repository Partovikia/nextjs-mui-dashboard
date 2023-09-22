import { Box } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Profile from "./img/avatar.jpg";
import Image from "next/image";
import Content from "@/components/content";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: "1rem",
        justifyContent: "space-between",
        background: "#171821",
        color: "white",
      }}
    >
      <Box
        component="form"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box sx={{ width: "80%" }}>
          <TextField
            required
            id="outlined-required"
            defaultValue="Search Here..."
            sx={{
              width: "70%",
              background: "#21222D",
              borderRadius: "15px",
            }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <NotificationsNoneIcon />
          <Image
            width={50}
            borderRadius= {50}
            alt="Avatar Image"
            src={Profile}
          />
          <KeyboardArrowDownIcon />
        </Box>
      </Box>
      <Content />
    </Box>
  );
};

export default Header;
