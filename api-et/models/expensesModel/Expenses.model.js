import ExpensesSchema from "./Expenses.schema.js";

//CRUD

//@expenses must be an object
export const createExpenses = (expenses) => {
  return ExpensesSchema.create(expenses);
};

//filter must be an object, that should at least contains the userId
export const getExpenses = (filter) => {
  return ExpensesSchema.find(filter);
};

//Filter mush be an object, that should at least contains the userId and expenses Id
export const deleteExpense = (filter) => {
  return ExpensesSchema.findOneAndDelete(filter);
};