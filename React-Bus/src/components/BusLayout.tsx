import React from "react";
import styled from "styled-components";
import { Buses } from "../utils";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

const Container = styled.div`
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const TicketContainer = styled.div`
  padding: 0.5rem;
`;

const TicketItem = styled.li`
  list-style-type: none;
  margin: 0.5rem;
  padding: 1px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

interface BusLayoutProps {
  selectedSeats: string[];
  setSelectedSeats: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function BusLayout({
  selectedSeats,
  setSelectedSeats,
}: BusLayoutProps) {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedBus = Buses.find(
    (data) => data.id === (id ? parseInt(id) : NaN)
  );
  const isSleeper = selectedBus?.busType === "Sleeper";
  const seatWidth = isSleeper ? "80px" : "25px";

  const isSeatAvailable = (seat: string) =>
    selectedBus?.availableSeats.includes(seat);

    const selectSeat = (seat: string) => {
      
      if (selectedSeats.length >= 5) {
        alert("5 ten fazla koltuk satın alınamaz.");
        return;
      }
      if (selectedSeats.includes(seat)) {
        const seats = selectedSeats.filter(
          (selectedSeat) => selectedSeat !== seat
        );
        setSelectedSeats(seats);
      } else {
        setSelectedSeats((prevState) => [...prevState, seat]);
      }
    };
    
    

  

  const isSeatSelected = (seat: string) => selectedSeats.includes(seat);

  const generateSeats = (array: (number[] | number)[] | undefined, key = "") =>
    array?.map((seats, index) =>
      Array.isArray(seats) ? (
        <div key={index} className="d-flex">
          {seats.map((seat) => (
            <TicketItem
              key={seat}
              style={{
                width: seatWidth,
                background: isSeatSelected(`${key}${seat}`)
                  ? "#318beb"
                  : isSeatAvailable(`${key}${seat}`)
                  ? "#fff"
                  : "#00FFFF",
                cursor: isSeatAvailable(`${key}${seat}`) ? "pointer" : "",
              }}
              onClick={() => selectSeat(`${key}${seat}`)}
            >
              {key} {seat}
            </TicketItem>
          ))}
        </div>
      ) : (
        <TicketItem
          key={seats}
          style={{
            width: seatWidth,
            background: isSeatSelected(`${key}${seats}`)
              ? "#318beb"
              : isSeatAvailable(`${key}${seats}`)
              ? "#fff"
              : "#ffc0cb",
            cursor: isSeatAvailable(`${key}${seats}`) ? "pointer" : "",
          }}
          onClick={() => selectSeat(`${key}${seats}`)}
        >
          {key} {seats}
        </TicketItem>
      )
    );

  const getAvailableSeatsCount = () => {
    return selectedBus?.availableSeats.length || 0;
  };

  const selectedSeatCount = selectedSeats?.length || 0;
  const availableSeatCount = getAvailableSeatsCount(); 
  const totalSeatsCount = 40; 

  const getBookedSeatsCount = () => {
    return totalSeatsCount - availableSeatCount;
  };

  const bookedSeatCount = getBookedSeatsCount();

  return (
    <Container>
      <h2>{selectedBus?.name}</h2>
      <h4>Biletler</h4>
      <h5>{selectedBus?.busType}</h5>
      <div className="d-flex">
        <div className="d-flex m2-2 align-items-center">
          <h6>Boş Koltuklar</h6>
          <TicketItem style={{ width: seatWidth }}>{availableSeatCount}</TicketItem>
        </div>
        <div className="d-flex m2-2 align-items-center">
          <h6>Dolu Koltuklar</h6>
          <TicketItem style={{ width: seatWidth, background: "#b6b4b4" }}>
            {bookedSeatCount}
          </TicketItem>
        </div>
        <div className="d-flex m2-2 align-items-center">
          <h6>Seçilen Koltuklar</h6>
          <TicketItem style={{ width: seatWidth, background: "#318beb" }}>
            {selectedSeatCount}
          </TicketItem>
          
        </div>

        
      </div>
      <ul className="d-flex flex-wrap">
        {isSleeper ? (
          <>
            <TicketContainer className="d-flex align-items-center">
              <div className="d-flex flex-wrap">
                {generateSeats(selectedBus?.seatLayout.first)}
                <div className="d-flex mt-4">
                  {generateSeats(selectedBus?.seatLayout.second)}
                </div>
                <div className="d-flex mt-4">
                  {generateSeats(selectedBus?.seatLayout.third)}
                </div>
                <div className="d-flex mt-4">
                  {generateSeats(selectedBus?.seatLayout.fourth)}
                </div>
              </div>
            </TicketContainer>
            <TicketContainer className="d-flex align-items-center">
              <div className="d-flex flex-wrap">
                {generateSeats(selectedBus?.seatLayout.first)}
                <div className="d-flex mt-4">
                  {generateSeats(selectedBus?.seatLayout.second)}
                </div>
                <div className="d-flex mt-4">
                  {generateSeats(selectedBus?.seatLayout.third)}
                </div>
                <div className="d-flex mt-4">
                  {generateSeats(selectedBus?.seatLayout.fourth)}
                </div>
              </div>
            </TicketContainer>
          </>
        ) : (
          <TicketContainer className="d-flex align-items-center">
            <div>Seater</div>
            <div>
              {generateSeats(selectedBus?.seatLayout.first)}
              <div className="d-flex align-items-center">
                {generateSeats(selectedBus?.seatLayout.second)}
              </div>
              <div className="d-flex mt-4">
                {generateSeats(selectedBus?.seatLayout.third)}
              </div>
              <div className="d-flex align-items-center">
                {generateSeats(selectedBus?.seatLayout.fourth)}
              </div>
            </div>
          </TicketContainer>
        )}
      </ul>
      <div className="d-flex justify-content-center">
        {selectedSeatCount > 0 && (
          <h4>Selected Seats - {selectedSeats.join(", ")}</h4>
        )}
      </div>
      <div>
        <Button
          className="ms-3"
          variant="success"
          onClick={() => navigate("/bus/book")}
          disabled={selectedSeatCount === 0}
        >
          Satın Al
        </Button>
      </div>
    </Container>
  );
}
