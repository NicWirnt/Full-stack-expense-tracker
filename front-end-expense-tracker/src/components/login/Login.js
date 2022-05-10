import React, { useState, useRef } from "react";
import { Alert, Button, Form, Row, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../../helper/axiosHelper";

export const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigator = useNavigate();

  const handleOnSubmit = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      return alert("Please enter the email and password");
    }

    setIsLoading(true);
    const { data } = await postLogin({ email, password });
    setIsLoading(false);

    // if login success, store user data in sessionStorage
    // else, show error message
    if (data.status === "Success") {
      const { name, email, _id } = data.user;
      sessionStorage.setItem("user", JSON.stringify({ name, email, _id }));
      setError("");
      navigator("/dashboard");
      return;
    }

    setError(data.message);
  };

  return (
    <Row className="login-comp mt-5">
      <Form>
        <h3>Welcome Back</h3>
        <hr />

        {isLoading && <Spinner animation="border" variant="primary"></Spinner>}

        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" onClick={handleOnSubmit}>
          Login
        </Button>
        <div className="text-end">
          New here? <Link to="/register">Register</Link>
        </div>
      </Form>
    </Row>
  );
};
