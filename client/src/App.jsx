import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoComp from "./components/TodoComp";
import axios from "axios";

const SERVER_URL = "http://localhost:8000/todo";
const App = () => {
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
		<Wrapper className="container">
			<div className="inner">
				<h1 className="fw-bold">
					Todo-<span className="text-primary">X</span>{" "}
				</h1>

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
		</Wrapper>
	);
};

export default App;

const Wrapper = styled.div`
	.inner {
		margin-top: 5rem;
		width: 100%;
		max-width: 768px;
		margin: auto;

		.todo {
			margin-top: 2rem;
			&-list {
				list-style: none;
				margin: 0;
				padding: 0;
				li {
					background-color: #f3f3f3;
					padding-left: 1rem;
					font-size: 1.2rem;
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 1rem;
				}
			}
		}
	}
`;
