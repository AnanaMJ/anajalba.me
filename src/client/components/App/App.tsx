import * as React from "react";
import {ReactNode} from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {HomePage} from "../HomePage/HomePage";
import {AboutPage} from "../AboutPage/AboutPage";

class App extends React.PureComponent {

	public render(): ReactNode {
		return (
			<BrowserRouter>
				<>
					<ul>
						<li><Link to={"/"}>home</Link></li>
						<li><Link to={"/about"}>about</Link></li>
					</ul>
					<Switch>
						<Route path={"/"} component={HomePage} exact={true}/>
						<Route path={"/about"} component={AboutPage}/>
					</Switch>
				</>
			</BrowserRouter>
		);
	}

}

export {
	App,
};
