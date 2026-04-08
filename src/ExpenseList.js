function ExpenseList({ expenses, deleteExpense }) {
  return (
    <ul>
      {expenses.map((item) => (
        <li key={item.id}>
          {item.title} - ${item.amount}
          <button onClick={() => deleteExpense(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;