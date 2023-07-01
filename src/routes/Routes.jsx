import FlightPicker from "../components/FlightPicker";
import FlightReservation from "../components/FlightReservation"; 
import Confirmation from "../components/Confirmation";
import { Route, Routes } from "react-router-dom";  

const RoutesComponent = () => {   
  return (
    <>
      <Routes>
        <Route exact path="/" element={<FlightPicker />} />
        <Route
          path="/flight-reservation/:flightId"
          element={<FlightReservation/>}
        /> 
        <Route
          path="/booking-confirmation"
          element={<Confirmation/>}
        />
      </Routes>
    </>
  );
};

export default RoutesComponent;
