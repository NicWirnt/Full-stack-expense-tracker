import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";

export const Dashboard = () => {
  const navigator = useNavigate();

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user?.name) {
      navigator("/");
    }
  }, []);

  return (
    <MainLayout>
      <h1>dashboard</h1>
    </MainLayout>
  );
};
