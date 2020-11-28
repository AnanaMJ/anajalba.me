import React, { ReactNode, PureComponent } from "react";
import { faConstruction } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as bs from "../../global-styles/Bootstrap.scss";
// import * as style from "./HomePage.scss";

export class HomePage extends PureComponent {
  public render(): ReactNode {
    return (
      <>
        <h1>
          This is <b>still</b> a site in progress. <FontAwesomeIcon className={bs.ml2} icon={faConstruction} />
        </h1>
        {/* <h1>
          Home Page
          <FontAwesomeIcon className={bs.ml2} icon={faHome} />
        </h1>
        <p>Welcome to my page.</p> */}
      </>
    );
  }
}
