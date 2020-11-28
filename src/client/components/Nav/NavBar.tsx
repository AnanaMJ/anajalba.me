import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBaby } from "@fortawesome/free-solid-svg-icons";

import { activeStyle } from "./commonStyling";
import * as styles from "./NavBar.scss";

export const NavBar = (): ReactElement => {
  return (
    // add bs.flexColumn to the wrapper of navlink to make it turn into columns
    <nav className={styles.siteHeader}>
      <div className={styles.headerContainer}>
        <NavLink
          className={styles.nav}
          to={"/"}
          activeStyle={activeStyle}
          isActive={(match, location): boolean => {
            return location.pathname === "/";
          }}
        >
          <h4>
            Home <FontAwesomeIcon className={styles.icon} icon={faHome} />
          </h4>
        </NavLink>
        <NavLink
          className={styles.nav}
          to={"/about"}
          activeStyle={activeStyle}
          isActive={(match, location): boolean => {
            return location.pathname === "/about";
          }}
        >
          <h4>
            About <FontAwesomeIcon className={styles.icon} icon={faBaby} />
          </h4>
        </NavLink>
      </div>
    </nav>
  );
};
