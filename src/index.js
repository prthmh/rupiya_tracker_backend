import "dotenv/config";

import './db/db.connect.js';

import incomeRouter from "./routes/income.routes.js";
import expenseRouter from "./routes/expense.routes.js";
import savingRouter from "./routes/saving.routes.js";

import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(helmet());
const corsOptions = {
  origin: ['http://localhost:5173', 'https://rupiyatrackr.netlify.app/'],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/income", incomeRouter);
app.use("/expense", expenseRouter);
app.use("/saving", savingRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Finance Management API.");
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not Found" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT} port.`);
});
