import React from "react"; 
import FlightPicker from "../components/FlightPicker";
import FlightReservation from "../components/FlightReservation";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East"; 
import { useNavigate } from "react-router-dom";

function FlightDetail({ flight }) { 
  let navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: "10px",
        p: 2,
        my: 2,
      }}
    >
      <ListItem sx={{ fontSize: 18, fontWeight: 500 }}>
        {flight.from} <EastIcon sx={{ fontSize: 18, px: 1 }} />
        {flight.to}
      </ListItem>
      <ListItem sx={{ color: "grey", fontWeight: 600 }}>
        Duration {flight.duration}
      </ListItem>
      <ListItem sx={{ fontSize: 20, fontWeight: 600 }}>
        {flight.price} Kč
      </ListItem>
      <Button
        variant="text"
        sx={{ display: "inline-flex", py: 1, px: 5, fontWeight: "bold" }} 
        onClick={() => navigate("/flight-reservation")}
      >
        Letenky
      </Button>
    </Box>
  );
}

export default FlightDetail;
