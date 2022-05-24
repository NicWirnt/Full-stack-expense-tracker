import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  ButtonGroup,
  Form,
  FormCheck,
  ListGroup,
  Spinner,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchExpenses } from "../../pages/dashboard/dashboardAction";
import { handleOnDeleteExpenses } from "../../pages/dashboard/dashboardAction";

export const CustomTable = () => {
  const dispatch = useDispatch();
  const { expenses, isLoading, res } = useSelector((state) => state.dashboard);
  const [ids, setIds] = useState([]);
  const [display, setDisplay] = useState("all"); //income or expenses

  useEffect(() => {
    dispatch(fetchExpenses());
    res.status === "success" && setIds([]);
  }, [res]);

  const handleOnDelete = async (ids) => {
    if (!window.confirm("are you sure you want to delete this expense?"))
      return;
    dispatch(handleOnDeleteExpenses(ids));
  };

  const handleOnCheck = (e) => {
    const { checked, value } = e.target;

    checked
      ? setIds([...ids, value])
      : setIds(ids.filter((id) => id !== value));
  };

  const incomeArg = expenses.filter((item) => item.type === "income");
  const expensesArg = expenses.filter((item) => item.type === "expenses");

  const transaction = {
    all: expenses,
    income: incomeArg,
    expense: expensesArg,
  };

  // console.log(transaction[display]);

  return (
    <div className="mt-5 custom-list fs-3">
      <div className="btn-group">
        <ButtonGroup aria-label="basic example">
          <Button onClick={() => setDisplay("all")} variant="primary">
            all
          </Button>
          <Button onClick={() => setDisplay("income")} variant="info">
            income
          </Button>
          <Button onClick={() => setDisplay("expense")} variant="danger">
            expenses
          </Button>
        </ButtonGroup>
        {display} transaction
      </div>

      {isLoading && <Spinner animation="border" variant="primary"></Spinner>}
      {res?.message && (
        <Alert variant={res.status === "success" ? "success" : "danger"}>
          {res?.message}
        </Alert>
      )}
      <Form>
        <ListGroup variant="flush">
          {transaction[display].map((item, i) => (
            <ListGroup.Item key={i} className="fw-bold">
              <Form.Group className="mb-3" id="formGridList">
                <Form.Check
                  type="checkbox"
                  className="mb-3"
                  value={item._id}
                  onClick={handleOnCheck}
                  label={item.type}
                ></Form.Check>
              </Form.Group>

              <span className="title">{item.name}</span>

              <span className="cost">
                {item.type === "expenses" ? "-" : ""}
                {item.amount}
              </span>

              <span className="cost">{item.date}</span>
              <Button
                variant="danger"
                onClick={() => handleOnDelete([item._id])}
              >
                <i className="fas fa-backspace"></i>
              </Button>
              <span className="cost"></span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Form>
      <div className="mt-2 text-end">
        <Button variant="danger" onClick={() => handleOnDelete(ids)}>
          Delete Selected Expenses
        </Button>
      </div>
    </div>
  );
};
