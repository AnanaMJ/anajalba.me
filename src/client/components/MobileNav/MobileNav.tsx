import React from "react";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBaby } from "@fortawesome/pro-light-svg-icons";
import * as bs from "../../global-styles/Bootstrap.scss";

import { Container, Spacer, NavWrapper, NavLink, NavButton } from "./styles";

const MobileNav = (): ReactNode => {
  return (
    <Container>
      <Spacer />
      <NavWrapper>
        <NavLink to="/">
          <NavButton aria-label="Home">
            <FontAwesomeIcon className={bs.ml2} icon={faHome} />
          </NavButton>
        </NavLink>
        <NavLink to="/about">
          <NavButton aria-label="Home">
            <FontAwesomeIcon className={bs.ml2} icon={faBaby} />
          </NavButton>
        </NavLink>
      </NavWrapper>
    </Container>
  );
};

export default MobileNav;
