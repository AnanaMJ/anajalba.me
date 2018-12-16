import {faBaby} from "@fortawesome/pro-light-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as React from "react";
import {ReactNode} from "react";
import * as bs from "../../global-styles/Bootstrap.scss";

class AboutPage extends React.PureComponent {

	public render(): ReactNode {
		return (
			<>
				<h1>
					About Me
					<FontAwesomeIcon className={bs.ml2} icon={faBaby}/>
				</h1>

				<p>This is my paragraph.</p>
			</>
		);
	}

}

export {
	AboutPage,
};
