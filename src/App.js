import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import "./styles.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    const filtered = expenses.filter((item) => item.id !== id);
    setExpenses(filtered);
  };

  const total = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="app">
      <h1>Expense Tracker</h1>

      <ExpenseForm addExpense={addExpense} />

      <h2>Total: ${total}</h2>

      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;