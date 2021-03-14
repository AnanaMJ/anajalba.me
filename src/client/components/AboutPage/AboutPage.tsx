import React, { ReactNode, PureComponent } from "react";
import { FaBaby } from "react-icons/fa";
import { Icon } from "@chakra-ui/icons";

import * as bs from "../../global-styles/Bootstrap.scss";
import * as styles from "../../global-styles/Global.scss";

class AboutPage extends PureComponent {
  public render(): ReactNode {
    return (
      <div className={styles.container}>
        <h1>
          About Me
          <Icon className={bs.ml2} as={FaBaby} />
        </h1>

        <p>This is my paragraph.</p>
      </div>
    );
  }
}

export { AboutPage };
