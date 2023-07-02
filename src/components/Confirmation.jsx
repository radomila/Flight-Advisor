import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Confirmation = (props) => {
  let navigate = useNavigate();

  const handleClose = () => {
    props.setOpen(false);
    navigate(`/`);
  };

  return (
    <Dialog
      open={props.open}
      onClose={() => props.setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
      }}
    >
      <DialogTitle id="alert-dialog-title" sx={{ fontWeight: 600 }}>
        {"Your booking has been completed!"}
      </DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <DialogContentText
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "grey",
            fontWeight: 600,
          }}
        >
          <p> Full name: </p>
          <p> Email address: </p>
          <p> Phone number: </p>
          <p> Departure city: </p>
          <p> Arrival city: </p>
        </DialogContentText>
        <DialogContentText
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "grey",
            ml: 3,
          }}
        >
          <p>
            {" "}
            {props.firstName} {props.lastName}
          </p>
          <p> {props.email} </p>
          <p> {props.phone} </p>
          <p> {props.city} </p>
          <p> {props.arrival} </p>
        </DialogContentText>
      </DialogContent>
      <Button onClick={handleClose}>Home</Button>
    </Dialog>
  );
};

export default Confirmation;
