import FlightPicker from "../components/FlightPicker";
import FlightReservation from "../components/FlightReservation";
import FlightsProvider from "../components/FlightsProvider";
import { Route, Routes} from "react-router-dom";

const RoutesComponent = () => {
  return (
    <FlightsProvider> 
      <Routes>
        <Route exact path="/" element={<FlightPicker/>} />
        <Route path="/flight-reservation" element={<FlightReservation/>} />
      </Routes>
    </FlightsProvider>
  );
};

export default RoutesComponent;
