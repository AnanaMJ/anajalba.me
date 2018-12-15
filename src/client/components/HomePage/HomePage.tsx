import * as React from "react";
import {ReactNode} from "react";
import * as bs from "../../global-styles/Bootstrap.scss";

class HomePage extends React.PureComponent {

	public render(): ReactNode {
		return (
			<h1 className={bs.h1}>Home Page</h1>
		);
	}

}

export {
	HomePage,
};
