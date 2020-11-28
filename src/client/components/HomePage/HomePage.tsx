import React, { ReactNode, PureComponent } from "react";
import { faHome } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as bs from "../../global-styles/Bootstrap.scss";
import * as style from "./HomePage.scss";

export class HomePage extends PureComponent {
  public render(): ReactNode {
    return (
      <div className={style.container}>
        <h1>
          Home Page
          <FontAwesomeIcon className={bs.ml2} icon={faHome} />
        </h1>

        <p>This is Home Page.</p>
      </div>
    );
  }
}
