import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CustomTable } from "../components/custom-table/CustomTable";
import { ExpensesForm } from "../components/expenses-form/ExpensesForm";
import { MainLayout } from "../components/layout/MainLayout";

export const Dashboard = () => {
  const navigator = useNavigate();

  const handleOnPost = (formDt) => {
    //call the api
    console.log("sumbmit", formDt);
  };

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user?._id) {
      navigator("/");
    }
  }, [navigator]);

  return (
    <MainLayout>
      <div>dashboard</div>

      <hr />

      <ExpensesForm handleOnPost={handleOnPost} />

      <CustomTable />
    </MainLayout>
  );
};
