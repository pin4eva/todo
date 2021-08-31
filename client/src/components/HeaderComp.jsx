import React from "react";
import { Link } from "react-router-dom";

const HeaderComp = () => {
	return (
		<header>
			<nav className="navbar">
				<Link to="/" className="navbar-brand link-dark">
					<h1 className="fw-bold my-0">
						Todo-<span className="text-primary">X</span>{" "}
					</h1>
				</Link>

				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link link-dark">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/about" className="nav-link link-dark">
							About
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default HeaderComp;
