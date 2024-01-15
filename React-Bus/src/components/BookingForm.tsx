import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { locations } from "../utils";

interface BookingFormProps {
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
  selectedSeats: string[];
  setSelectedSeats: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function BookingForm({
  searchState,
  setSearchState,
  selectedSeats,
  setSelectedSeats,
}: BookingFormProps) {
  const navigate = useNavigate();

  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCVV] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [isPaying, setIsPaying] = useState(false); // New state for spinner visibility
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    if (paymentSuccess) {
      // If payment is successful, reset states after 2 seconds
      const timer = setTimeout(() => {
        setPaymentSuccess(false);
        setSearchState({
          from: locations[0],
          to: locations[2],
          date: "",
        });
        setSelectedSeats([]);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [paymentSuccess, setSearchState, setSelectedSeats, navigate]);

  const handlePayment = () => {
    setIsPaying(true);

    // Simulate payment process
    setTimeout(() => {
      setIsPaying(false);
      setPaymentSuccess(true);
    }, 2000);
  };

  return (
    <div className="text-center">
      <Row>
        <Col>
          <h5>
            {searchState.from} To {searchState.to}
          </h5>
          <h5>Tarih: {searchState.date}</h5>
          <br />
          <h5>Lütfen bilgileri doldurunuz</h5>

          {selectedSeats.map((data: string) => (
            <div key={data}>
              <div className="my-3">Koltuk No: {data} </div>
              <Form.Group className="d-flex justify-content-center">
                <Form.Label>Yolcu Adı Soyadı:</Form.Label>
                <Form.Control
                  className="ms-2 mb-3 width-300"
                  placeholder="İsim Soyisim"
                  type="text"
                />
              </Form.Group>
              <Form.Group className="d-flex justify-content-center">
                <Form.Label>Tc Kimlik Numarası:</Form.Label>
                <Form.Control
                  className="ms-2 mb-3 width-300"
                  placeholder="Tc No"
                  type="number"
                />
              </Form.Group>
            </div>
          ))}
        </Col>

<Col>
  <Form.Group className="mb-3 p-3 border rounded">
    <h5 className="mb-4">Ödeme Bilgileri</h5>
    <Form.Group className="mb-3">
      <Form.Label>Kart Üzerindeki İsim:</Form.Label>
      <Form.Control
        className="input-field"
        placeholder="İsim"
        type="text"
        value={cardholderName}
        onChange={(e) => setCardholderName(e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Kart Numarası:</Form.Label>
      <Form.Control
        className="input-field"
        placeholder="Kart No"
        type="text"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>CVV:</Form.Label>
      <Form.Control
        className="input-field"
        placeholder="CVV"
        type="text"
        value={cvv}
        onChange={(e) => setCVV(e.target.value)}
      />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Son Kullanma Tarihi:</Form.Label>
      <Form.Control
        className="input-field"
        placeholder="MM/YY"
        type="text"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
      />
      <Button
              onClick={handlePayment}
              variant="success"
              disabled={isPaying}
            >
              {isPaying ? (
                <>
                  <Spinner animation="border" size="sm" className="me-2" />
                  Ödeme Yapılıyor...
                </>
              ) : (
                "Öde"
              )}
      </Button>
      {paymentSuccess && (
              <div className="mt-2 text-success">Ödeme başarılı!</div>
            )}
            <Button
              onClick={() => navigate("/bus")}
              variant="primary"
              className="me-2"
            >
              Anasayfaya Dön
            </Button>
    </Form.Group>
  </Form.Group>
</Col>

      </Row>
      
    </div>
  );
}
