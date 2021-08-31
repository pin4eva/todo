import React from "react";
import { Link } from "react-router-dom";

const TodoComp = ({ todo, onDelete }) => {
	return (
		<li className="todo-item">
			<Link to={`/${todo?._id}`} className="c-pointer">
				{todo?.item}
			</Link>
			<button className="btn text-danger" onClick={() => onDelete(todo._id)}>
				<i className="fas fa-trash"></i>{" "}
			</button>{" "}
		</li>
	);
};

export default TodoComp;
