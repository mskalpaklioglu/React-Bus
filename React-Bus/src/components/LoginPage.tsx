
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = [
      { email: 'deneme@gmail.com', password: '123',gender:'male' },
      { email: 'deneme2@gmail.com', password: '456',gender:'female' },
    ];

    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      setError(null);
      navigate('/bus');
    } else {
      setError('Kullanıcı adı veya şifreniz yanlış ya da bulunamadı.');
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h2>Giriş Ekranı</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Emailinizi giriniz."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Şifre:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Şifrenizi giriniz."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleLogin}>
              Giriş Yap
            </Button>
          </Form>
          <div className="mt-3">
            <Link to="/register">Hesabınız yok mu? Yeni Hesap Oluştur!</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
