import { faHome } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { ReactNode } from "react";
import * as bs from "../../global-styles/Bootstrap.scss";

class HomePage extends React.PureComponent {

  public render(): ReactNode {
    return (
      <>
        <h1>
          Home Page
				<FontAwesomeIcon className={bs.ml2} icon={faHome} />
        </h1>

        <p>This is Home Page.</p>
      </>
    );
  }

}

export {
  HomePage,
};
