import Expense from "../models/expenses.model.js";

async function addExpense(expenseData) {
  try {
    const newExpense = await Expense(expenseData);
    const saved = await newExpense.save();
    console.log("Expense added:", saved);
    return saved;
  } catch (error) {
    console.error("Errror in adding expense");
    console.error(error);
    throw error;
  }
}

async function fetchExpense() {
  try {
    const expenses = await Expense.find({});
    console.log("All expenses:", expenses);
    return expenses;
  } catch (error) {
    console.error("Error in fetching expenses");
    console.error(error);
    throw error;
  }
}

export { addExpense, fetchExpense };
