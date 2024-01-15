import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import BusSearch from "./components/BusSearch";
import "bootstrap/dist/css/bootstrap.min.css";
import { locations } from "./utils";
import BusLayout from "./components/BusLayout";
import BookingForm from "./components/BookingForm";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

function App() {
  const [searchState, setSearchState] = useState({
    from: locations[0],
    to: locations[2],
    date: "",
  });

  const [selectedSeats, setSelectedSeats] = useState<string[]>([]); 

  return (
    <div>
      <Header />
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
        <Routes>
          <Route
            path="/bus"
            element={
              <BusSearch
                searchState={searchState}
                setSearchState={setSearchState}
              />
            }
          />
          <Route
            path="/bus/bus/:id"
            element={
              <BusLayout
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
              />
            }
          />
          <Route
            path="/bus/book"
            element={
              <BookingForm
                selectedSeats={selectedSeats}
                searchState={searchState}
                setSelectedSeats={setSelectedSeats}
                setSearchState={setSearchState}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
