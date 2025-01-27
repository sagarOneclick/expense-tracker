import React from 'react'

export const Add = ({setExpenses,setIncomes}) => {
  
  function addExpense(e) {
    e.preventDefault();
    // Add the new expense to the state
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { text, category }, // Add the new expense as an object
    ]);
    // Clear the form inputs
    setText("");
    setCategory("");
  }

  function addIncome(e) {
    e.preventDefault();
    setIncomes((prevIncomes) => [
      ...prevIncomes,
      { text: incomeText, category: incomeCategory },
    ]);
    setIncomeText("");
    setIncomeCategory("");
  }

  return (
    <>
    <h4>Add expense</h4>
      <form onSubmit={addExpense}>
        <h6>Expense</h6>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add expense"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Expense category"
        />
        <button type="submit">Submit</button>
      </form>
      <h4>Add income</h4>
      <form onSubmit={addIncome}>
        <h6>Add Income</h6>
        <input
          type="text"
          value={incomeText}
          onChange={(e) => setIncomeText(e.target.value)}
          placeholder="Income description"
        />
        <input
          type="text"
          value={incomeCategory}
          onChange={(e) => setIncomeCategory(e.target.value)}
          placeholder="Income category"
        />
        <button type="submit">Add Income</button>
      </form>
    </>
  );
}
