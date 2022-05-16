import React from "react";
import { ListGroup } from "react-bootstrap";

export const CustomTable = ({ expenses, handleOnDelete }) => {
  return (
    <div className="mt-5 custom-list fs-3">
      <ListGroup variant="flush">
        {expenses.map((item, i) => (
          <ListGroup.Item key={i} className="fw-bold">
            <span className="title">{item.name}</span>
            <span className="cost">${item.amount}</span>
            <span className="cost">{item.date}</span>
            <button variant="danger" onClick={handleOnDelete}>
              <i className="fas fa-backspace"></i>
            </button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
