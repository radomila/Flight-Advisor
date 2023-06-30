import React from "react"; 
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DestinationPicker from "./DestinationPicker";

const FlightList = (props) => { 
  return (
    <Box sx={{ ml: 10, mt: 5 }}>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        Vyberte si let
      </Typography>
      <DestinationPicker />
    </Box>
  );
};

export default FlightList;
