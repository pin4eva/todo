import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoComp from "../components/TodoComp";
import axios from "axios";
import HeaderComp from "../components/HeaderComp";

export const SERVER_URL = "http://localhost:8000/todo";
const HomePage = () => {
	const [todos, setTodos] = useState([]);

	const [input, setInput] = useState("");

	useEffect(() => {
		const getTodos = async () => {
			try {
				const { data } = await axios.get(SERVER_URL);
				setTodos(data);
			} catch (error) {
				console.log(error);
			}
		};
		getTodos();
	}, []);

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	// add todo
	const addTodo = async () => {
		if (!input) return;
		console.log("hi");
		try {
			const { data } = await axios.post(SERVER_URL, {
				item: input,
			});

			setTodos([...todos, data]);
			setInput("");
		} catch (error) {
			console.log(error);
		}
	};
	// delete todo
	const deleteTodo = async (id) => {
		try {
			const filteredTodos = todos.filter((todo) => todo._id !== id);
			setTodos(filteredTodos);
			const { data } = await axios.delete(`${SERVER_URL}/${id}`);
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="container">
			<form>
				<input
					type="text"
					className="form-control mb-2"
					placeholder="Add todo"
					value={input}
					onChange={handleChange}
				/>
				<button type="button" className="btn btn-primary" onClick={addTodo}>
					Add Now
				</button>
			</form>

			<div className="todo">
				<ul className="todo-list">
					{todos.length < 1 ? (
						<p>You don't have any todo</p>
					) : (
						todos.map((todo, i) => (
							<TodoComp key={i} todo={todo} onDelete={deleteTodo} />
						))
					)}
				</ul>
			</div>
		</div>
	);
};

export default HomePage;
