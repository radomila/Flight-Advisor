import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Confirmation from "./Confirmation";

const BookingForm = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState(null);
  const [arrival, setArrival] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [FormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isLastNameValid, setIsLastNameValid] = useState(false);
  const [isDepartureValid, setIsDepartureValid] = useState(false);
  const [isArrivalValid, setIsArrivalValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false); 
  const [open, setOpen] = useState(false); 

  const isValid = (event) => {
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

    if (!/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email)) {
      setIsEmailValid(true);
    }
    setIsFormValid(true);

    if (firstName) {
      console.log(firstName);
    }
  };

  const isFormSubmitted = (event) => {
    isValid();
    if (isFormValid) {
      setIsFormSubmitted(true); 
      setOpen(true)
    } else {
      setIsFormSubmitted(false); 
      setOpen(false)
    }
  }; 
  

  return (
    <Box>
      <Box>
        <Box sx={{ mb: 2 }}>
          <Typography sx={{ color: "grey", fontWeight: 600, mt: 1 }}>
            Contact information
          </Typography>
          <Divider sx={{ width: "55ch", mt: 1 }} />
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
              firstName={firstName}
              required
              id="outlined-required"
              label="First Name"
              placeholder="First Name"
              variant="standard"
              onChange={(e) => setFirstName(e.target.value)}
              helperText={
                (isFormValid && !firstName ? "First Name is required" : null) ||
                (isFormValid && isFirstNameValid
                  ? "First name is invalid"
                  : null)
              }
              error={
                (isFormValid && !firstName) || (isFormValid && isFirstNameValid)
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
                (isFormValid && !email ? "Email address is required" : null) ||
                (isFormValid && isEmailValid ? "Email is invalid" : null)
              }
              error={(isFormValid && !email) || (isFormValid && isEmailValid)}
            />
            <TextField
              required
              id="outlined-required"
              label="Departure city"
              placeholder="Departure city"
              variant="standard"
              onChange={(e) => setCity(e.target.value)}
              helperText={
                (isFormValid && !city ? "Departure city is required" : null) ||
                (isFormValid && isDepartureValid
                  ? "Departure city is invalid"
                  : null)
              }
              error={
                (isFormValid && !city) || (isFormValid && isDepartureValid)
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
                (isFormValid && !lastName ? "Last Name is required" : null) ||
                (isFormValid && isFirstNameValid
                  ? "Last name is invalid"
                  : null)
              }
              error={
                (isFormValid && !lastName) || (isFormValid && isLastNameValid)
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
                (isFormValid && !phone ? "Phone number is required" : null) ||
                (isFormValid && isPhoneValid ? "Phone number is invalid" : null)
              }
              error={(isFormValid && !phone) || (isFormValid && isPhoneValid)}
            />
            <TextField
              required
              id="outlined-required"
              label="Arrival city"
              placeholder="Arrival city"
              variant="standard"
              onChange={(e) => setArrival(e.target.value)}
              helperText={
                (isFormValid && !arrival ? "Arrival city is required" : null) ||
                (isFormValid && isArrivalValid
                  ? "Arrival city is invalid"
                  : null)
              }
              error={
                (isFormValid && !arrival) || (isFormValid && isArrivalValid)
              }
            />
          </Box>
        </Box>
        <Button
          onClick={isFormSubmitted}
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
      {FormSubmitted && (
        <Confirmation
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone} 
          city={city} 
          arrival={arrival} 
          open={open}
          setOpen={setOpen}
        />
      )}
    </Box>
  );
};

export default BookingForm;
