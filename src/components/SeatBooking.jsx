import React, { useContext } from "react";
import Box from "@mui/material/Box";
import { FlightsContext } from "./FlightsProvider";

const SeatBooking = () => {
  const data = useContext(FlightsContext);
  const selectedFlight = useContext(FlightsContext);

  return (
    <div>
      {/* {selectedFlight &&( 
        //console.log(selectedFlight.seats)
      )
} */}
    </div>
  );
};

export default SeatBooking;
