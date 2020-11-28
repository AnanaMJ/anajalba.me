import React, { ReactNode, PureComponent } from "react";

import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as styles from "../../global-styles/Global.scss";

export class HomePage extends PureComponent {
  public render(): ReactNode {
    return (
      <>
        <div className={styles.container}>
          <h1 style={{ backgroundColor: "white", padding: "4px" }}>
            This is <b>still</b> a site in progress. <FontAwesomeIcon className={styles.icon} icon={faWrench} />
          </h1>
          {/* <h1>
          Home Page
          <FontAwesomeIcon className={bs.ml2} icon={faHome} />
        </h1>
        <p>Welcome to my page.</p> */}
        </div>
      </>
    );
  }
}
