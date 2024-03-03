import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
  description: String,
  amount: Number,
  category: String,
}, { timestamps: true });

const Income = mongoose.model('Income', incomeSchema);

export default Income;