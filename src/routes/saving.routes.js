import express from "express";

import { addSavings, fetchSavings } from "../controllers/saving.controller.js";

const savingRouter = express.Router();

savingRouter.post("/", async (req, res) => {
  try {
    const newSaving = await addSavings(req.body);
    if (newSaving) {
      res.status(201).json({ message: "New saving created.", newSaving });
    } else {
      res.status(404).json({ message: "No saving." });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: "Error in adding saving.", error });
  }
});

savingRouter.get("/", async (req, res) => {
  try {
    const allSavings = await fetchSavings();
    if (allSavings) {
      res.status(200).json({ message: "All savings fetched.", allSavings });
    } else {
      res.status(404).json({ message: "No saving." });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: "Error in fetching savings.", error });
  }
});

export default savingRouter;
