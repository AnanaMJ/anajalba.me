import * as React from "react";
import { ReactNode } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBaby } from "@fortawesome/pro-light-svg-icons";
import * as bs from "../../global-styles/Bootstrap.scss";
import { combine } from "../../helpers/style-helpers";
import { HomePage } from "../HomePage/HomePage";
import { AboutPage } from "../AboutPage/AboutPage";
import * as styles from "./App.scss";

class App extends React.PureComponent {
  public render(): ReactNode {
    // const currentLocation = useLocation();
    // console.log("current location: ", currentLocation.pathname);
    return (
      <BrowserRouter>
        <>
          <nav className={combine(styles.siteHeader, bs.stickyTop, bs.py2)}>
            <div className={combine(bs.containerFluid, bs.dFlex, bs.flexColumn, bs.flexMdRow, bs.justifyContentStart)}>
              <NavLink
                className={bs.px3}
                to={"/"}
                activeStyle={{
                  color: "red",
                  fontWeight: "bold",
                }}
                isActive={(match, location): boolean => {
                  return location.pathname === "/";
                }}
              >
                Home <FontAwesomeIcon className={bs.ml2} icon={faHome} />
              </NavLink>
              <NavLink
                className={bs.px3}
                to={"/about"}
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                isActive={(match, location): boolean => {
                  return location.pathname === "/about";
                }}
              >
                About <FontAwesomeIcon className={bs.ml2} icon={faBaby} />
              </NavLink>
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
