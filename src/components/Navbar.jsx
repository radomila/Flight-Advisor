import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <AirplanemodeActiveIcon sx={{ pr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Flight Advisor
          </Typography>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "white", fontWeight: 600 }}
          >
            Domů
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
