import Navbar from "./components/Navbar";
import FlightsProvider from "./components/FlightsProvider";
import RoutesComponent from "./routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";

function Main() {
  return (
    <FlightsProvider>
      <Router>
        <Navbar />
        <RoutesComponent />
      </Router>
    </FlightsProvider>
  );
}

export default Main;
