import React from "react";
import styled from "styled-components";
import { Bus } from "../utils";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const BusListContainer = styled.div`
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const BusItem = styled.div`
  background-color: white;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

interface BusListProps {
  buses: Bus[];
}

const BusList: React.FC<BusListProps> = ({ buses }) => {
  const navigate = useNavigate();
  return (
    <BusListContainer>
      <h2>Kullanılabilir Otobüsler</h2>
      {buses.map((bus) => (
        <BusItem
          className="d-flex align-items-center justify-content-between"
          key={bus.id}
        >
          <div>
            <h3>{bus.name}</h3>
            <p>
              <strong>Çıkış Şehri:</strong> {bus.source}
            </p>
            <p>
              <strong>Varış Şehri:</strong>
              {bus.destination}
            </p>
            <p>
              <strong>Kalkış Saati:</strong>
              {bus.departureTime}
            </p>
            <p>
              <strong>Varış Saati:</strong>
              {bus.arrivalTime}
            </p>
            <p>
              <strong>Fiyat:</strong>
              {bus.price}
            </p>
            <p>
              <strong>Tipi:</strong>
              {bus.busType}
            </p>
          </div>
          <div>
            <Button
              className="mb-3"
              variant="success"
              onClick={() => navigate(`bus/${bus.id}`)}
            >
              Rezervasyon Yap
            </Button>
            <h5>Müsait Koltuklar:{bus.availableSeats.length}</h5>
          </div>
        </BusItem>
      ))}
    </BusListContainer>
  );
};

export default BusList;
