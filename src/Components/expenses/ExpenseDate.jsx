import React from "react";
import "../../ExpenseData.css";

function ExpenseDate(currentdate) {
	// console.log("My date ==>", skdfjskdf.date);
	let date = currentdate.date.split("-");
	const year = date[0];
	const month = date[1];
	const day = date[2];

	return (
		<div className="expense-date">
			<div className="expense-date__month">{month}</div>
			<div className="expense-date__year">{year}</div>
			<div className="expense-date__day">{day}</div>
		</div>
	);
}

export default ExpenseDate;
