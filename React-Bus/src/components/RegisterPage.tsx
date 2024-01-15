// RegisterPage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [identityNumber, setIdentityNumber] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const handleRegister = () => {
    console.log('Registering user:', {
      email,
      password,
      firstName,
      lastName,
      identityNumber,
      gender,
      birthDate,
    });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2>Kayıt Ekranı</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Emailinizi giriniz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Şifre:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Şifrenizi giriniz"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>İsim:</Form.Label>
              <Form.Control
                type="text"
                placeholder="İsminizi giriniz"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Soyisim:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Soyisminizi giriniz"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicIdentityNumber">
              <Form.Label>Tc Kimlik Numarası:</Form.Label>
              <Form.Control
                type="text"
                placeholder="TcKimlikNo"
                value={identityNumber}
                onChange={(e) => setIdentityNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGender">
              <Form.Label>Cinsiyet:</Form.Label>
              <Form.Select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Cinsiyetinizi Seçiniz</option>
                <option value="female">Kadın</option>
                <option value="male">Erkek</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBirthDate">
              <Form.Label>Doğum Tarihi:</Form.Label>
              <Form.Control
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleRegister}>
              Kayıt Ol
            </Button>
          </Form>
          <div className="mt-3">
            <Link to="/">Hesabınız var mı? Giriş yapın!</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
