import React, { useContext, useState } from "react";
import { FlightsContext } from "./FlightsProvider";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FlightDetail from "./FlightDetail";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const DestinationPicker = () => {
  const data = useContext(FlightsContext); 
  console.log(data);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDest, setSelectedDest] = useState(null);
  const [selectedFinalDest, setSelectedFinalDest] = useState(null);
  const [filteredDest, setFilteredDest] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const selectStartingDest = (event, date) => {
    setSelectedDest(date);
  };

  const selectFinalDest = (event, date) => {
    setSelectedFinalDest(date);
  };

  const HandleSelectedDate = (value) => {
    const date = value?.$d;
    const z = new Date(date);
    const time = z.getTime();
    console.log(time);
    setSelectedDate(time);
  };

  const handleFilteredFlights = () => {
    const filteredFlights = data.filter((flight) => {
      const flightDeparture = flight.departure;
      const x = new Date(flightDeparture);
      const timeFlight = x.getTime();

      const flightMatch =
        flight.from === selectedDest?.from &&
        flight.to === selectedFinalDest?.to &&
        timeFlight === selectedDate;
      return flightMatch;
    });
    setFilteredDest(filteredFlights);
    setIsClicked(true);
    console.log(filteredFlights);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 1, mt: 1 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateTimePicker"]}>
            <DateTimePicker
              sx={{ width: "300px" }}
              value={selectedDate}
              label="Departure date"
              onChange={HandleSelectedDate}
            />
          </DemoContainer>
        </LocalizationProvider>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 1, mt: 1 }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            sx={{ width: 300 }}
            options={[...data]}
            getOptionLabel={(flight) => flight.from}
            value={selectedDest}
            onChange={selectStartingDest}
            renderInput={(params) => (
              <TextField {...params} label="Starting destination" />
            )}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            sx={{ width: 300 }}
            options={[...data]}
            getOptionLabel={(flight) => flight.to}
            value={selectedFinalDest}
            onChange={selectFinalDest}
            renderInput={(params) => (
              <TextField {...params} label="Final destination" />
            )}
          />
        </Box>
        <Button
          onClick={handleFilteredFlights}
          variant="contained"
          sx={{ display: "flex", py: 1, mt: 2, maxWidth: "150px" }}
        >
          Najít lety
        </Button>

        {isClicked && filteredDest.length === 0 && (
          <Typography variant="h6" sx={{ mt: 2 }}>
            Na základě zadaných parametrů nebyly nalezeny žádné dostupné lety.
          </Typography>
        )}

        {filteredDest &&
          filteredDest.map((flight) => {
            return (
              <div>
                <Typography variant="h6" sx={{ mt: 3 }}>
                  {" "}
                  Všechny dostupné lety:
                </Typography>
                <FlightDetail key={flight.id} flight={flight} />
              </div>
            );
          })}
      </Box>
    </Box>
  );
};

export default DestinationPicker;
