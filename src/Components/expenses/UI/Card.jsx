import React from "react";
import "../../../styles/Card.css";
function Card({ className, children }) {
	const classes = "card " + className;
	return <div className={classes}>{children}</div>;
}

export default Card;
