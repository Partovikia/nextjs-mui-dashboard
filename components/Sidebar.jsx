import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box } from "@mui/material";
import { ThemeProvider, Typography } from "@mui/material";
import theme from "../components/Theme";

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
              }}
              className="bg-purple-800 text-white p-3 rounded-lg inline-block"
            >
              <Typography variant="h2">
                {/* <RxSketchLogo size={20} /> */} Dashboard
              </Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{ m: "1rem 0" }}>
              <Typography variant="h2">
                {/* <RxDashboard size={20} /> */} Profile
              </Typography>
            </Box>
          </Link>
          <Link href="/customers">
            <Box sx={{ m: "1rem 0" }}>
              <Typography variant="h2">
                {/* <RxPerson size={20} /> */} LeaderBoard
              </Typography>
            </Box>
          </Link>
          <Link href="/orders">
            <Box sx={{ m: "1rem 0" }}>
              <Typography variant="h2">
                {/* <HiOutlineShoppingBag size={20} /> */} Order
              </Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{ m: "1rem 0" }}>
              <Typography variant="h2">
                {/* <FiSettings size={20} /> */} Product
              </Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{ m: "1rem 0" }}>
              <Typography variant="h2">
                {/* <FiSettings size={20} /> */} Sales Report
              </Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{ m: "1rem 0" }}>
              <Typography variant="h2">
                {/* <FiSettings size={20} /> */} Message
              </Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{ m: "1rem 0" }}>
              <Typography variant="h2">
                {/* <FiSettings size={20} /> */} Settings
              </Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{ m: "1rem 0" }}>
              <Typography variant="h2">
                {/* <FiSettings size={20} /> */} Favourite
              </Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{ m: "1rem 0" }}>
              <Typography variant="h2">
                {/* <FiSettings size={20} /> */} History
              </Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{ m: "1rem 0" }}>
              <Typography variant="h2">
                {/* <FiSettings size={20} /> */} Signout
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
