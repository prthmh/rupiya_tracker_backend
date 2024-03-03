import Income from "../models/income.model.js";

async function addIncome(incomeData) {
  try {
    const newIncome = await Income(incomeData);
    const saved = await newIncome.save();
    console.log("Income added:", saved);
    return saved;
  } catch (error) {
    console.error("Errror in adding income");
    console.error(error);
    throw error;
  }
}

async function fetchIncome() {
  try {
    const incomes = await Income.find({});
    console.log("All incomes:", incomes);
    return incomes;
  } catch (error) {
    console.error("Error in fetching income");
    console.error(error);
    throw error;
  }
}

export { addIncome, fetchIncome };
