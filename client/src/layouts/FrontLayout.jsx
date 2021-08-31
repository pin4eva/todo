import React from "react";
import styled from "styled-components";
import HeaderComp from "../components/HeaderComp";

const FrontLayout = ({ children }) => {
	return (
		<FrontLayoutWrapper>
			<div className="inner">
				<HeaderComp />
				<main className="mt-3">{children}</main>
			</div>
		</FrontLayoutWrapper>
	);
};

export default FrontLayout;

const FrontLayoutWrapper = styled.div`
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
