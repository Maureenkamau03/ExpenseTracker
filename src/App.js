import React from "react";

import Expenses from "./Components/expenses/Expenses";
import NewExpense from "./Components/expenses/newexpenses/NewExpense";

function App() {
	const [expenses, setExpenses] = React.useState([]);

	const addExpenseHandler = (expense) => {
		setExpenses([expense, ...expenses]);
	};
	const data = expenses;

	return (
		<div className="App">
			<NewExpense onAddExpenseHandler={addExpenseHandler} />
			<Expenses expense={data} />
		</div>
	);
}

export default App;
