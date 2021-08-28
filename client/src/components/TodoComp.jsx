import React from "react";

const TodoComp = ({ todo, onDelete }) => {
	return (
		<li className="todo-item">
			<a href="/" className="c-pointer">
				{todo?.item}
			</a>
			<button className="btn text-danger" onClick={() => onDelete(todo._id)}>
				<i className="fas fa-trash"></i>{" "}
			</button>{" "}
		</li>
	);
};

export default TodoComp;
