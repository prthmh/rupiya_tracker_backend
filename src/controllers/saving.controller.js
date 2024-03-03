import Savings from "../models/savings.model.js";

async function addSavings(savingData) {
  try {
    const newSaving = await Savings(savingData);
    const saved = await newSaving.save();
    console.log("Saving added:", saved);
    return saved;
  } catch (error) {
    console.error("Errror in adding saving");
    console.error(error);
    throw error;
  }
}

async function fetchSavings() {
  try {
    const savings = await Savings.find({});
    console.log("All savings:", savings);
    return savings;
  } catch (error) {
    console.error("Error in fetching savings");
    console.error(error);
    throw error;
  }
}

export { addSavings, fetchSavings };
