import React, { useState, useContext } from "react";
import { FlightsContext } from "./FlightsProvider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const SeatBooking = ({ flightId }) => {
  const data = useContext(FlightsContext);
  const [reservedSeat, setReservedSeat] = useState([]); 

  const handleReservation = (seat) => {
    if (reservedSeat.includes(seat)) {
      setReservedSeat(reservedSeat.filter((reservedSeat) => reservedSeat !== seat));
    } else {
      setReservedSeat([...reservedSeat, seat]);
    }
  }; 

  const isSeatReserved = (seat) => {
    return reservedSeat.includes(seat);
  };

  const handleFlightSeats = () => {
    const flight = data.find((flight) => flight.id === Number(flightId));
    if (flight) {
      return flight.seats.map((seat) =>
        seat.available === false ? (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              key={seat.id}
              sx={{
                border: "1px solid black",
                backgroundColor: "#FA8383",
                borderRadius: "5px",
                cursor: "not-allowed",
                width: "2ch",
                p: 2,
                m: 2,
              }}
            >
              {seat.number}
            </Box>
            <Box>
              Availability: <strong> reserved </strong>
            </Box>
          </Box>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              onClick={() => handleReservation(seat)}
              key={seat.id}
              sx={{
                border: "1px solid black",
                backgroundColor: isSeatReserved(seat) ? "#D3D7DE" : "#C6F5A6",
                borderRadius: "5px",
                cursor: "pointer",
                width: "2ch",
                p: 2,
                m: 2,
              }}
            >
              {seat.number}
            </Box>
            {isSeatReserved(seat) && (
              <Box>
                Your seat is <strong> reserved </strong>
              </Box>
            )}
          </Box>
        )
      );
    } else {
      return <p>No seats are available</p>;
    }
  };
  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ color: "grey", fontWeight: 600 }}>
          Seat Booking
        </Typography>
        <Divider sx={{ width: "55ch", mt: 1 }} />
        {handleFlightSeats()}
      </Box>
    </Box>
  );
};

export default SeatBooking;
