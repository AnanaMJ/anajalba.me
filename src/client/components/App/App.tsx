import React, { PureComponent, ReactNode } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { HomePage } from "../HomePage";
import { AboutPage } from "../AboutPage/AboutPage";
import { NavBar, MobileNav } from "../Nav";
import * as styles from "./App.scss";

export class App extends PureComponent {
  public render(): ReactNode {
    return (
      <BrowserRouter>
        <div className={styles.page}>
          <MobileNav />
          <NavBar />

          <Switch>
            <Route path={"/"} component={HomePage} exact={true} />
            <Route path={"/about"} component={AboutPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
