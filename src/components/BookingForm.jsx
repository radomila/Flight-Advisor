import React, { useState } from "react";
import SeatBooking from "./SeatBooking";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box"; 
import Divider from '@mui/material/Divider';
 
const FlightReservation = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState(null);
  const [arrival, setArrival] = useState("");
  const [submittedForm, setSubmittedForm] = useState(false);
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isLastNameValid, setIsLastNameValid] = useState(false);
  const [isDepartureValid, setIsDepartureValid] = useState(false);
  const [isArrivalValid, setIsArrivalValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false); 
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!/^[a-zA-Z]+$/.test(firstName, lastName, city)) {
      setIsFirstNameValid(true);
      setIsLastNameValid(true);
      setIsDepartureValid(true);
      setIsArrivalValid(true);
    }
    if (
      !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone)
    ) {
      setIsPhoneValid(true);
    } 

    if(!/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email)) {
      setIsEmailValid(true);
    }

    setSubmittedForm(true);
  };

  return (
    <Box sx={{ ml: 10, mt: 5 }}>
      <SeatBooking />
      <Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Flight Booking
          </Typography>
          <Typography sx={{ color: "grey", fontWeight: 600, mt: 1 }}>
            Contact information
          </Typography> 
          <Divider sx={{width: "55ch", mt: 1 }}/>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 5,
            "& .MuiTextField-root": { width: "25ch" },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <TextField
              required
              id="outlined-required"
              label="First Name"
              placeholder="First Name"
              variant="standard"
              onChange={(e) => setFirstName(e.target.value)}
              helperText={
                (submittedForm && !firstName
                  ? "First Name is required"
                  : null) ||
                (submittedForm && isFirstNameValid
                  ? "First name is invalid"
                  : null)
              }
              error={
                (submittedForm && !firstName) ||
                (submittedForm && isFirstNameValid)
              }
            />
            <TextField
              required
              id="outlined-required"
              label="Email address"
              placeholder="Email adress"
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
              helperText={
                (submittedForm && !email ? "Email address is required" : null) || (submittedForm && isEmailValid ? "Email is invalid" : null)
              }
              error={(submittedForm && !email) || (submittedForm && isEmailValid)}
            />
            <TextField
              required
              id="outlined-required"
              label="Departure city"
              placeholder="Departure city"
              variant="standard"
              onChange={(e) => setCity(e.target.value)}
              helperText={
                (submittedForm && !city
                  ? "Departure city is required"
                  : null) ||
                (submittedForm && isDepartureValid
                  ? "Departure city is invalid"
                  : null)
              }
              error={
                (submittedForm && !city) || (submittedForm && isDepartureValid)
              }
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <TextField
              required
              id="outlined-required"
              label="Last Name"
              placeholder="Last Name"
              variant="standard"
              onChange={(e) => setLastName(e.target.value)}
              helperText={
                (submittedForm && !lastName ? "Last Name is required" : null) ||
                (submittedForm && isFirstNameValid
                  ? "Last name is invalid"
                  : null)
              }
              error={
                (submittedForm && !lastName) ||
                (submittedForm && isLastNameValid)
              }
            />
            <TextField
              required
              id="outlined-required"
              label="Phone number"
              placeholder="Phone number"
              variant="standard"
              onChange={(e) => setPhone(e.target.value)}
              helperText={
                (submittedForm && !phone ? "Phone number is required" : null) || (submittedForm && isPhoneValid ? "Phone number is invalid" : null)
              }
              error={(submittedForm && !phone) || (submittedForm && isPhoneValid)}
            />
            <TextField
              required
              id="outlined-required"
              label="Arrival city"
              placeholder="Arrival city"
              variant="standard"
              onChange={(e) => setArrival(e.target.value)}
              helperText={
                (submittedForm && !arrival
                  ? "Arrival city is required"
                  : null) ||
                (submittedForm && isArrivalValid
                  ? "Arrival city is invalid"
                  : null)
              }
              error={
                (submittedForm && !arrival) || (submittedForm && isArrivalValid)
              }
            />
          </Box>
        </Box>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyCenter: "center",
            mt: 3,
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default FlightReservation;
