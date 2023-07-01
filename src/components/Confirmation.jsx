import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Confirmation = ({firstName}) => { 
  console.log(firstName);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 4 }}>
        Your booking has been completed! 
      </Typography>
        <p>This is information about Your flight.</p>
      <Box
        sx={{
          width: "60ch",
          border: "1px solid black",
          borderRadius: "5px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", fontWeight: 600 }}>
          <p> Name: {firstName} </p> 
          <p> Email address: </p> 
          <p> Phone number: </p> 
          <p> Departure city: </p> 
          <p> Arrival city: </p>
        </Box>
      </Box>
    </Box>
  );
};

export default Confirmation;
