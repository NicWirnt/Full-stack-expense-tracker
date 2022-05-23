import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchExpenses } from "../../pages/dashboard/dashboardAction";

export const CustomTable = ({ handleOnDelete }) => {
  const dispatch = useDispatch();
  const { expenses } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(fetchExpenses());
  }, []);

  return (
    <div className="mt-5 custom-list fs-3">
      <ListGroup variant="flush">
        {expenses.map((item, i) => (
          <ListGroup.Item key={i} className="fw-bold">
            <span className="title">{item.name}</span>
            <span className="cost">${item.amount}</span>
            <span className="cost">{item.date}</span>
            <button variant="danger" onClick={() => handleOnDelete(item._id)}>
              <i className="fas fa-backspace"></i>
            </button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
