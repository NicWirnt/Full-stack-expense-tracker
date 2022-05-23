import express from "express";
import {
  createExpenses,
  deleteExpense,
  getExpenses,
} from "../models/expensesModel/Expenses.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { authorization } = req.headers;

    // model get all expenses of userID == authorization
    const expenses = await getExpenses({ userId: authorization });
    res.json({
      status: "success",
      expenses,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { authorization } = req.headers;

    const result = await createExpenses({ ...req.body, userId: authorization });

    result?.id
      ? res.json({
          status: "success",
          message: "Expenses created successfully",
        })
      : res.json({
          status: "error",
          message: "Error creating expenses, please try again later",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: error.message,
    });
  }
  console.log(req.body);
});

router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params; //Task ID
    const { authorization } = req.headers; // USER ID
    console.log(authorization, _id, "delete-router");
    const result = await deleteExpense({ _id, userId: authorization });
    result?.id
      ? res.json({
          status: "success",
          message: "Expenses deleted successfully",
        })
      : res.json({
          status: "error",
          message: "Error deleting expenses, please try again later",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
