import * as React from "react";
import {ReactNode} from "react";

class AboutPage extends React.PureComponent {

	public render(): ReactNode {
		return (
			<>
				<h1>About Me</h1>

				<p>This is my paragraph.</p>
			</>
		);
	}

}

export {
	AboutPage,
};
