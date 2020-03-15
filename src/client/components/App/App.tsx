import * as React from "react";
import { ReactNode } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "../HomePage/HomePage";
import { AboutPage } from "../AboutPage/AboutPage";
import NavBar from "../NavBar/NavBar";
import MobileNav from "../MobileNav/MobileNav";

class App extends React.PureComponent {
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

export { App };
