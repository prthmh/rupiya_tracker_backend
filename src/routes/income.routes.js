import express from "express";

import { addIncome, fetchIncome } from "../controllers/income.controller.js";

const incomeRouter = express.Router();

incomeRouter.post("/", async (req, res) => {
  try {
    const newIncome = await addIncome(req.body);
    if (newIncome) {
      res.status(201).json({ message: "New income created.", newIncome });
    } else {
      res.status(404).json({ message: "No income." });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: "Error in adding income.", error });
  }
});

incomeRouter.get("/", async (req, res) => {
  try {
    const allIncomes = await fetchIncome();
    if (allIncomes) {
      res.status(200).json({ message: "All incomes fetched.", allIncomes });
    } else {
      res.status(404).json({ message: "No income." });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: "Error in fetching incomes.", error });
  }
});

export default incomeRouter;
