import React, { useState } from "react";
import { Alert, Button, Form, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { postRegister } from "../../helper/axiosHelper";
import { useDispatch, useSelector } from "react-redux";
import { isLoadingPending, setResponse } from "./userSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export const Register = () => {
  const dispatch = useDispatch();

  const [formDt, setFormDt] = useState(initialState);
  // const [isLoading, setIsLoading] = useState(false);
  // const [res, setRes] = useState({});

  const { res, isLoading } = useSelector((state) => state.user);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormDt({ ...formDt, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // setIsLoading(true);
    dispatch(isLoadingPending(true));

    //call api using axios
    const { data } = await postRegister(formDt);
    console.log(data);

    // setRes(data);
    dispatch(setResponse(data));

    // setIsLoading(false);
  };

  return (
    <Row className="login-comp mt-5">
      <Form onSubmit={handleOnSubmit}>
        <h3>Register to Join!!</h3>
        <hr />
        {isLoading && (
          <Spinner variant="danger text-center" animation="border" />
        )}

        {res.message && (
          <Alert variant={res.status === "success" ? "success" : "danger"}>
            {res.message}
          </Alert>
        )}

        <Form.Group className="mb-3" controlId="formBasicFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleOnChange}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
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
