import * as React from "react";
import { ReactNode } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import * as bs from "../../global-styles/Bootstrap.scss";
import { combine } from "../../helpers/style-helpers";
import { AboutPage } from "../AboutPage/AboutPage";
import { HomePage } from "../HomePage/HomePage";
import * as styles from "./App.scss";

class App extends React.PureComponent {
  public render(): ReactNode {
    return (
      <BrowserRouter>
        <>
          <nav className={combine(styles.siteHeader, bs.stickyTop, bs.py2)}>
            <div className={combine(bs.containerFluid, bs.dFlex, bs.flexColumn, bs.flexMdRow, bs.justifyContentStart)}>
              <Link className={bs.px3} to={"/"}>
                Home
              </Link>
              <Link className={bs.px3} to={"/about"}>
                About
              </Link>
            </div>
          </nav>
          <Switch>
            <Route path={"/"} component={HomePage} exact={true} />
            <Route path={"/about"} component={AboutPage} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export { App };
