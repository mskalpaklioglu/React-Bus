import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import { Bus, Buses, locations } from "../utils";
import BusList from "./BusList";



interface BusSearchProps {
  searchState: {
    from: string;
    to: string;
    date: string;
  };
  setSearchState: React.Dispatch<
    React.SetStateAction<{
      from: string;
      to: string;
      date: string;
    }>
  >;
}

const Container = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export default function BusSearch({
  searchState,
  setSearchState,
}: BusSearchProps) {
  const [filteredBus, setFilteredBus] = useState<Bus[] | null>(null);

  const handleSearch = () => {
    const filteredBuses: Bus[] = Buses.filter(
      (data) =>
        data.source === searchState.from &&
        data.destination === searchState.to &&
        data.availableDates.includes(searchState.date)
    );
  
    setFilteredBus(filteredBuses.length > 0 ? filteredBuses : null);
  };

  return (
    <Container>
      <h2 className="mb-3">Otobüs Arama</h2>
      <div className="d-flex flex-column align-items-center">
        <Form.Select
          className="mb-3 width-300"
          value={searchState.from}
          onChange={(e) =>
            setSearchState((prevState) => ({
              ...prevState,
              from: e.target.value,
            }))
          }
        >
          {locations.map((data: string) => (
            <option key={`${data}-source`} value={data}>
              {data}
            </option>
          ))}
        </Form.Select>
        <Form.Select
          className="mb-3 width-300"
          value={searchState.to}
          onChange={(e) =>
            setSearchState((prevState) => ({
              ...prevState,
              to: e.target.value,
            }))
          }
        >
          {locations.map((data: string) => (
            <option key={`${data}-destination`} value={data}>
              {data}
            </option>
          ))}
        </Form.Select>
        <input
          className="form-control mb-3 width-300"
          type="date"
          value={searchState.date}
          onChange={(e) =>
            setSearchState((prevState) => ({
              ...prevState,
              date: e.target.value,
            }))
          }
        />
      </div>
      <Button variant="primary" className="mb-3" onClick={handleSearch}>
        Otobüs Ara
      </Button>
      {filteredBus && filteredBus?.length > 0 && <BusList buses={filteredBus} />}
      {filteredBus && filteredBus.length < 1 && <h3>Otobüs bulunamadı.</h3>}
    </Container>
  );
}
