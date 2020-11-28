import React, { PureComponent, ReactNode } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { HomePage } from "../HomePage";
import { AboutPage } from "../AboutPage/AboutPage";
import { NavBar } from "../NavBar";
import { MobileNav } from "../MobileNav";

export class App extends PureComponent {
  public render(): ReactNode {
    return (
      <BrowserRouter>
        <>
          <MobileNav />
          <NavBar />

          <Switch>
            <Route path={"/"} component={HomePage} exact={true} />
            <Route path={"/about"} component={AboutPage} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}
