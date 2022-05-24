import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { handleOnPost } from "../../pages/dashboard/dashboardAction";

export const ExpensesForm = () => {
  const dispatch = useDispatch();

  const initialState = {
    name: "",
    amount: "",
    date: "",
  };

  const [formDt, setFormDt] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormDt({
      ...formDt,
      [name]: value,
    });
  };

  const handleOnSumbit = (e) => {
    e.preventDefault();
    dispatch(handleOnPost(formDt));
  };

  return (
    <div>
      <Form onSubmit={handleOnSumbit}>
        <Row className="g-3 bg-secondary p-4 rounded pb-5">
          <Col md="4">
            <Form.Select
              aria-label="default select example"
              onChange={handleOnChange}
              name="type"
              required
            >
              <option>Select One</option>
              <option value="income">Income</option>
              <option value="expenses">Expenses</option>
            </Form.Select>
          </Col>
          <Col md="4">
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Expenses Name"
              aria-label="First name"
              name="name"
              onChange={handleOnChange}
            />
          </Col>
          <Col md="2">
            <Form.Control
              type="number"
              className="form-control"
              placeholder="0.00"
              aria-label="Last name"
              name="amount"
              onChange={handleOnChange}
            />
          </Col>
          <Col md="4">
            <Form.Control
              type="date"
              className="form-control"
              aria-label="Last name"
              name="date"
              onChange={handleOnChange}
            />
          </Col>
          <Col md="2">
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
