import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBaby } from "@fortawesome/pro-light-svg-icons";

import { combine } from "../../helpers/style-helpers";
import * as bs from "../../global-styles/Bootstrap.scss";
import * as style from "./MobileNav.scss";

export const MobileNav = (): ReactElement => {
  return (
    <div className={combine(bs.container, style.container)}>
      <div className={combine(bs.container, style.spacer)} />
      <div className={combine(bs.container, bs.mxAuto, style.navWrapper)}>
        <NavLink
          className={bs.mxAuto}
          to="/"
          activeStyle={{
            color: "red",
            fontWeight: "bold",
          }}
          isActive={(match, location): boolean => {
            return location.pathname === "/";
          }}
        >
          {/* <button type="button" className={combine(bs.btn, style.navButton)} aria-label="Home"> */}
          <FontAwesomeIcon className={bs.mxAuto} icon={faHome} />
          {/* </button> */}
        </NavLink>
        <NavLink
          className={bs.mxAuto}
          to="/about"
          activeStyle={{
            color: "red",
            fontWeight: "bold",
          }}
          isActive={(match, location): boolean => {
            return location.pathname === "/about";
          }}
        >
          {/* <button  type="button" className={combine(bs.btn, style.navButton)} aria-label="Home"> */}
          <FontAwesomeIcon className={bs.mxAuto} icon={faBaby} />
          {/* </button> */}
        </NavLink>
      </div>
    </div>
  );
};
