import React from "react";
import { Button, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <Row className="login-comp mt-5">
      <Form>
        <h3>Register to Join!!</h3>
        <hr />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="email" placeholder="Your Full Name" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="success" type="submit">
          Register
        </Button>
        <div className="text-end">
          Already a member? <Link to="/">Login</Link>
        </div>
      </Form>
    </Row>
  );
};
