import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";

import { FaHome, FaBaby } from "react-icons/fa";
import { Icon } from "@chakra-ui/icons";

import { combine } from "../../helpers/style-helpers";
import * as bs from "../../global-styles/Bootstrap.scss";
import { activeStyle } from "./commonStyling";
import * as style from "./MobileNav.scss";

export const MobileNav = (): ReactElement => {
  return (
    <div className={combine(bs.container, style.container)}>
      <div className={combine(bs.container, style.spacer)} />
      <div className={combine(bs.container, bs.mxAuto, style.navWrapper)}>
        <NavLink
          className={bs.mxAuto}
          to="/"
          activeStyle={activeStyle}
          isActive={(match, location): boolean => {
            return location.pathname === "/";
          }}
        >
          {/* <button type="button" className={combine(bs.btn, style.navButton)} aria-label="Home"> */}
          <Icon className={bs.mxAuto} as={FaHome} />
          {/* </button> */}
        </NavLink>
        <NavLink
          className={bs.mxAuto}
          to="/about"
          activeStyle={activeStyle}
          isActive={(match, location): boolean => {
            return location.pathname === "/about";
          }}
        >
          {/* <button  type="button" className={combine(bs.btn, style.navButton)} aria-label="Home"> */}
          <Icon className={bs.mxAuto} as={FaBaby} />
          {/* </button> */}
        </NavLink>
      </div>
    </div>
  );
};
