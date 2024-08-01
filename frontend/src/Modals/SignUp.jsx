import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import "./login.css";

const SignUp = ({ show, handleClose }) => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await delay(500);
    console.log(`Username :${inputUsername}, Password :${inputPassword}`);
    if (inputUsername !== "admin" || inputPassword !== "admin") {
      setShowAlert(true);
    }
    setLoading(false);
  };

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>SignUp</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {showAlert && (
            <Alert
              variant="danger"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              Incorrect username or password.
            </Alert>
          )}
          <Form.Group className="mb-2" controlId="username">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={inputUsername}
              placeholder="abc@gmail.com"
              onChange={(e) => setInputUsername(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={inputPassword}
              placeholder="******"
              onChange={(e) => setInputPassword(e.target.value)}
              required
            />
            
          </Form.Group>
          
          <Form.Group className="mb-2 " controlId="checkbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit" disabled={loading}>
            {loading ? "Signing In..." : "Sign Up"}
          </Button>
          <div className="d-grid justify-content-end">
            <Button
              className="text-muted px-0"
              variant="link"
              onClick={() => {}}
            >
              Forgot password?
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default SignUp;
