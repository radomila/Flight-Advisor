import React from "react";
import BookingForm from "./BookingForm";
import SeatBooking from "./SeatBooking";
import Box from "@mui/material/Box";  
import { useParams } from "react-router-dom";

const FlightReservation = () => { 
  const { flightId } = useParams();   
  return ( 
    <Box sx={{ ml: 10, mt: 5 }}>
      <Box sx={{display: "flex", flexDirection: "column", gap: 1}}>
        <SeatBooking flightId={flightId}/>
        <BookingForm/>
      </Box>
    </Box>
  );
}

export default FlightReservation;
