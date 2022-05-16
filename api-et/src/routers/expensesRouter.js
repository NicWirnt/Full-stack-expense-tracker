import express from "express";
import {
  createExpenses,
  getExpenses,
} from "../models/expensesModel/Expenses.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { authorization } = req.headers;

    // model get all expenses of userID == authorization
    const expenses = await getExpenses({ userId: authorization });
    res.json({
      status: "successs",
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

router.delete("/", (req, res) => {
  res.json({
    message: "welcome to the expense API delete",
  });
});

export default router;
