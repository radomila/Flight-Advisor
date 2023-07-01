import FlightPicker from "../components/FlightPicker";
import BookingForm from "../components/BookingForm";
import FlightsProvider from "../components/FlightsProvider";
import { Route, Routes} from "react-router-dom";

const RoutesComponent = () => {
  return (
    <FlightsProvider> 
      <Routes>
        <Route exact path="/" element={<FlightPicker/>} />
        <Route path="/flight-reservation" element={<BookingForm/>} />
      </Routes>
    </FlightsProvider>
  );
};

export default RoutesComponent;
