function ExpenseList({ expenses, deleteExpense }) {
  return (
    <ul>
      {expenses.map((item, index) => (
        <li key={index}>
          {item.title} - ${item.amount}
          <button onClick={() => deleteExpense(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;