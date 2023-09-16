import { Box } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box
      sx={{
        width: "90%",
        position: "relative",
        left: "7%",
        displey: "flex",
        flexDirection: "row",
        px: "4%",
        justifyContent: "space-between",
      }}
    >
      <h2>Dashboard</h2>
      <h2>Welcome Back, User</h2>
    </Box>
  );
};

export default Header;
