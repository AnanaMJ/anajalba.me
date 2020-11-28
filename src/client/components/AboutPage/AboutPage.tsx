import React, { ReactNode, PureComponent } from "react";
import { faBaby } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as bs from "../../global-styles/Bootstrap.scss";
import * as styles from "../../global-styles/Global.scss";

class AboutPage extends PureComponent {
  public render(): ReactNode {
    return (
      <div className={styles.container}>
        <h1>
          About Me
          <FontAwesomeIcon className={bs.ml2} icon={faBaby} />
        </h1>

        <p>This is my paragraph.</p>
      </div>
    );
  }
}

export { AboutPage };
