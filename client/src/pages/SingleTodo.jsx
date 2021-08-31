import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SERVER_URL } from ".";

const SingleTodo = () => {
	const { id } = useParams();

	const [todo, setTodo] = useState({});

	useEffect(() => {
		const getTodo = async () => {
			try {
				const { data } = await axios.get(`${SERVER_URL}/${id}`);
				setTodo(data);
			} catch (error) {
				console.log(error);
			}
		};
		getTodo();
	}, [id]);
	return (
		<div>
			<ul className="nav flex-column">
				<li className="nav-item mb-2">Item: {todo?.item}</li>
				<li className="nav-item mb-2">_id: {todo?._id}</li>
			</ul>
		</div>
	);
};

export default SingleTodo;
