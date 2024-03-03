import express from "express";

import { addExpense, fetchExpense } from "../controllers/expense.controller.js";

const expenseRouter = express.Router();

expenseRouter.post("/", async (req, res) => {
  try {
    const newExpense = await addExpense(req.body);
    if (newExpense) {
      res.status(201).json({ message: "New expense created.", newExpense });
    } else {
      res.status(404).json({ message: "No expense." });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: "Error in adding expense.", error });
  }
});

expenseRouter.get("/", async (req, res) => {
  try {
    const allExpenses = await fetchExpense();
    if (allExpenses) {
      res.status(200).json({ message: "All expenses fetched.", allExpenses });
    } else {
      res.status(404).json({ message: "No expense." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ errorMessage: "Error in fetching expenses.", error });
  }
});

export default expenseRouter;
