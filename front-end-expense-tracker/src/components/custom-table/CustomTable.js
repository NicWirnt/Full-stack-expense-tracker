import React from "react";
import { ListGroup } from "react-bootstrap";

export const CustomTable = () => {
  return (
    <div className="mt-5 custom-list fs-3">
      <ListGroup variant="flush">
        <ListGroup.Item>
          <span className="title">Tv shopp</span>
          <span className="cost">$55</span>
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="title">Tv shopp</span>
          <span className="cost">$55</span>
        </ListGroup.Item>
        <ListGroup.Item>
          <span className="title">Tv shopp</span>
          <span className="cost">$55</span>
        </ListGroup.Item>
        <ListGroup.Item className="fw-bolder">
          <span className="title">Total</span>
          <span className="cost">$555</span>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};
