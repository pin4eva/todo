import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FrontLayout from "./layouts/FrontLayout";
import HomePage from "./pages";
import AboutPage from "./pages/AboutPage";
import SingleTodo from "./pages/SingleTodo";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => (
				<Layout>
					<Component {...props} />
				</Layout>
			)}
		/>
	);
};

const RouterComp = () => {
	return (
		<Router>
			<Switch>
				<AppRoute path="/" exact component={HomePage} layout={FrontLayout} />
				<AppRoute path="/about" component={AboutPage} layout={FrontLayout} />
				<AppRoute path="/:id" component={SingleTodo} layout={FrontLayout} />
			</Switch>
		</Router>
	);
};

export default RouterComp;
