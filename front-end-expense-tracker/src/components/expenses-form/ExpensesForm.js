import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const ExpensesForm = () => {
  return (
    <div>
      <Row className="g-3 bg-secondary p-4 rounded pb-5">
        <Col md="4">
          <Form.Control
            type="text"
            className="form-control"
            placeholder="Expenses Name"
            aria-label="First name"
          />
        </Col>
        <Col md="2">
          <Form.Control
            type="number"
            className="form-control"
            placeholder="0.00"
            aria-label="Last name"
          />
        </Col>
        <Col md="4">
          <Form.Control
            type="date"
            className="form-control"
            aria-label="Last name"
          />
        </Col>
        <Col md="2">
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Col>
      </Row>
    </div>
  );
};
