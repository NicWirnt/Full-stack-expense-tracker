import React, { useEffect, useState } from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CustomTable } from "../components/custom-table/CustomTable";
import { ExpensesForm } from "../components/expenses-form/ExpensesForm";
import { MainLayout } from "../components/layout/MainLayout";
import { getExpenses, postExpenses } from "../helper/axiosHelper";

export const Dashboard = () => {
  const navigator = useNavigate();
  const [resp, setResp] = useState({
    status: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user?._id) {
      navigator("/");
    }
  }, [navigator]);

  const fetchExpenses = async () => {
    const data = await getExpenses();
  };

  const handleOnPost = async (formDt) => {
    //call the api
    console.log("sumbmit", formDt);

    setIsLoading(true);
    const data = await postExpenses(formDt);
    console.log(data);
    setIsLoading(false);
    setResp(data);
  };

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

      <ExpensesForm handleOnPost={handleOnPost} />

      <CustomTable />
    </MainLayout>
  );
};
