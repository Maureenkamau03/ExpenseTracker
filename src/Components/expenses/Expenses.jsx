import React from "react";
import "../../styles/Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./UI/Card";
function Expenses(props) {
	const items = props.expense;

	return (
		<Card className="expenses">
			{items.map((item) => (
				<ExpenseItem
					key={item.id}
					title={item.title}
					amount={item.amount}
					date={item.date}
				/>
			))}
		</Card>
	);
}

export default Expenses;
