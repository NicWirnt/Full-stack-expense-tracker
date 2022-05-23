import React, { useEffect, useState } from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CustomTable } from "../../components/custom-table/CustomTable";
import { ExpensesForm } from "../../components/expenses-form/ExpensesForm";
import { MainLayout } from "../../components/layout/MainLayout";
import {
  deleteExpenses,
  getExpenses,
  postExpenses,
} from "../../helper/axiosHelper";
import { useSelector } from "react-redux";

export const Dashboard = () => {
  const navigator = useNavigate();
  const [resp, setResp] = useState({
    status: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user?._id) {
      navigator("/");
    }
    // fetchExpenses();
  }, [navigator]);

  return (
    <MainLayout>
      <div>dashboard</div>

      <hr />
      <Row>
        <Col className="mb-5">
          {isLoading && <Spinner variant="primary" animation="border" />}

          {resp?.message && (
            <Alert variant={resp.status === "success" ? "success" : "danger"}>
              {resp?.message}
            </Alert>
          )}
        </Col>
      </Row>

      <ExpensesForm />

      <CustomTable />
    </MainLayout>
  );
};
