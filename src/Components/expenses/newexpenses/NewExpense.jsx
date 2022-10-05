import React from "react";
import "../../../styles/NewExpense.css";

function NewExpense(props) {
	const [dataForm, setFormData] = React.useState({
		title: "",
		amount: "",
		date: "",
	});
	const titleChangeHandler = (e) => {
		setFormData({ ...dataForm, [e.target.name]: e.target.value });
	};
	// console.log(dataForm);

	const submitHandler = (e) => {
		e.preventDefault();
		const expenseData = {
			...dataForm,
			id: Math.random().toString(),
		};
		setFormData({ title: "", amount: "", date: "" });
		props.onAddExpenseHandler(expenseData);
	};
	return (
		<div>
			<div className="new-expense">
				<form onSubmit={submitHandler}>
					<div className="new-expense__controls">
						<div className="new-expense__control">
							<label>Title</label>
							<input
								type="text"
								name="title"
								value={dataForm.title}
								onChange={titleChangeHandler}
							/>
						</div>
						<div className="new-expense__control">
							<label>Amount</label>
							<input
								type="number"
								min="0.01"
								step="0.01"
								name="amount"
								value={dataForm.amount}
								onChange={titleChangeHandler}
							/>
						</div>
						<div className="new-expense__control">
							<label>Date</label>
							<input
								type="date"
								min="2019-01-01"
								max="2022-12-31"
								name="date"
								value={dataForm.date}
								onChange={titleChangeHandler}
							/>
						</div>
					</div>
					<div className="new-expense__actions">
						<button type="submit">Add Expense</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default NewExpense;
