import "dotenv/config";

import './db/db.connect.js';

import incomeRouter from "./routes/income.routes.js";
import expenseRouter from "./routes/expense.routes.js";
import savingRouter from "./routes/saving.routes.js";

import express from "express";
// import cors from "cors";
import helmet from "helmet";

const app = express();

// const allowedOrigins = ['http://localhost:5173', 'https://rupiyatrackr.netlify.app/'];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
// };

// app.use(cors(corsOptions));
app.use(helmet());

app.use(express.json());
app.use("/income", incomeRouter);
app.use("/expense", expenseRouter);
app.use("/saving", savingRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Finance Management API.");
});

// app.use((req, res, next) => {
//   res.setHeader(
//     "Access-Control-Allow-Origin",
//     "https://rupiyatrackr.netlify.app",
//   );
//   res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });

app.use((req, res) => {
  res.status(404).json({ error: "Route not Found" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT} port.`);
});
