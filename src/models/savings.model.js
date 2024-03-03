import mongoose from "mongoose";

const savingsSchema = new mongoose.Schema(
  {
    description: String,
    amount: Number,
    category: String,
  },
  { timestamps: true }
);

const Savings = mongoose.model("Savings", savingsSchema);

export default Savings;
