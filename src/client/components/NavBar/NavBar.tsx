import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBaby } from "@fortawesome/pro-light-svg-icons";

import * as bs from "../../global-styles/Bootstrap.scss";
import { combine } from "../../helpers/style-helpers";
import * as styles from "./NavBar.scss";

export const NavBar = (): ReactElement => {
  return (
    // add bs.flexColumn to the wrapper of navlink to make it turn into columns
    <nav className={combine(styles.siteHeader)}>
      {/* <div className={combine(bs.containerFluid, bs.dFlex, bs.flexMdRow, bs.justifyContentStart)}> */}
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
      {/* </div> */}
    </nav>
  );
};
