import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box } from "@mui/material";
import { ThemeProvider, Typography } from "@mui/material";
import theme from "../components/Theme";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import MapsUgcRoundedIcon from "@mui/icons-material/MapsUgcRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

const Sidebar = ({ children }) => {
  return (
    <Box sx={{ displey: "flex" }}>
      <Box
        sx={{
          position: "fixed",
          width: "10%",
          height: "100vh",
          padding: "4px",
          background: "#171821",
          borderRight: "1px solid gray",
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            displey: "flex",
            alignItems: "center",
            width: "90%",
          }}
        >
          <Link href="/">
            <Box
              sx={{
                background: "#A9DFD8",
                color: "black",
                borderRadius: ".25rem",
                padding: "8px 5px",
                m: "1rem 0",
                alignItems: "center",
              }}
              className="bg-purple-800 text-white p-3 rounded-lg inline-block"
            >
              <Typography variant="h2">
                <OtherHousesIcon /> Dashboard
              </Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{ m: "1rem 0" }}>
              <Typography variant="h2">
                <PersonOutlineIcon /> Profile
              </Typography>
            </Box>
          </Link>
          <Link href="/customers">
            <Box sx={{ m: "1rem 0" }}>
              <Typography variant="h2">
                <LeaderboardOutlinedIcon /> LeaderBoard
              </Typography>
            </Box>
          </Link>
          <Link href="/orders">
            <Box sx={{ m: "1rem 0" }}>
              <Typography variant="h2">
                <ShoppingCartOutlinedIcon /> Order
              </Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{ m: "1rem 0" }}>
              <Typography variant="h2">
                <ShoppingBagOutlinedIcon /> Product
              </Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{ m: "1rem 0" }}>
              <Typography variant="h2">
                <ShowChartOutlinedIcon /> Sales Report
              </Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{ m: "1rem 0" }}>
              <Typography variant="h2">
                <MapsUgcRoundedIcon /> Message
              </Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{ m: "1rem 0" }}>
              <Typography variant="h2">
                <SettingsOutlinedIcon /> Settings
              </Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{ m: "1rem 0" }}>
              <Typography variant="h2">
                <GradeOutlinedIcon /> Favourite
              </Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{ m: "1rem 0" }}>
              <Typography variant="h2">
                <RestoreOutlinedIcon /> History
              </Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{ m: "1rem 0" }}>
              <Typography variant="h2">
                <ExitToAppOutlinedIcon /> Signout
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>
      <main className="ml-20 w-full">{children}</main>
    </Box>
  );
};

export default Sidebar;
