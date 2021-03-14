import React, { ReactNode, PureComponent } from "react";

import { FaWrench } from "react-icons/fa";
import { Icon } from "@chakra-ui/icons";

import * as styles from "../../global-styles/Global.scss";

export class HomePage extends PureComponent {
  public render(): ReactNode {
    return (
      <>
        <div className={styles.container}>
          <h1 style={{ backgroundColor: "white", padding: "4px" }}>
            This is <b>still</b> a site in progress. <Icon className={styles.icon} as={FaWrench} />
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
