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
          width: "200px",
          height: "100vh",
          padding: "4px",
          background: "#171821",
          borderRight: "1px solid gray",
          display: "flex",
          justifyContent: "space-between",
          justifyContent: "center",
          gap: "1.25rem",
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
                borderRadius: ".57rem",
                padding: "8px 5px",
                m: "1rem 0",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h2"
                sx={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <OtherHousesIcon /> Dashboard
              </Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{ m: "1rem 0" }}>
              <Typography
                variant="h2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "gray",
                  m: "30px 0",
                }}
              >
                <PersonOutlineIcon /> Profile
              </Typography>
            </Box>
          </Link>
          <Link href="/customers">
            <Box sx={{ m: "1rem 0" }}>
              <Typography
                variant="h2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "gray",
                  m: "30px 0",
                }}
              >
                <LeaderboardOutlinedIcon /> LeaderBoard
              </Typography>
            </Box>
          </Link>
          <Link href="/orders">
            <Box sx={{ m: "1rem 0" }}>
              <Typography
                variant="h2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "gray",
                  m: "30px 0",
                }}
              >
                <ShoppingCartOutlinedIcon /> Order
              </Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{ m: "1rem 0" }}>
              <Typography
                variant="h2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "gray",
                  m: "30px 0",
                }}
              >
                <ShoppingBagOutlinedIcon /> Product
              </Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{ m: "1rem 0" }}>
              <Typography
                variant="h2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "gray",
                  m: "30px 0",
                }}
              >
                <ShowChartOutlinedIcon /> Sales Report
              </Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{ m: "1rem 0" }}>
              <Typography
                variant="h2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "gray",
                  m: "30px 0",
                }}
              >
                <MapsUgcRoundedIcon /> Message
              </Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{ m: "1rem 0" }}>
              <Typography
                variant="h2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "gray",
                  m: "30px 0",
                }}
              >
                <SettingsOutlinedIcon /> Settings
              </Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{ m: "1rem 0" }}>
              <Typography
                variant="h2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "gray",
                  m: "30px 0",
                }}
              >
                <GradeOutlinedIcon /> Favourite
              </Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{ m: "1rem 0" }}>
              <Typography
                variant="h2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "gray",
                  m: "30px 0",
                }}
              >
                <RestoreOutlinedIcon /> History
              </Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{ m: "1rem 0" }}>
              <Typography
                variant="h2"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "gray",
                  m: "30px 0",
                }}
              >
                <ExitToAppOutlinedIcon /> Signout
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>
      {/* <main className="ml-20 w-full">{children}</main> */}
    </Box>
  );
};

export default Sidebar;
