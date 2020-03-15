import styled from "styled-components";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/Button";

const Container = styled.div`
  display: none;
  @media (max-width: 640px) {
    display: block;
  }
`;

const Spacer = styled.div`
  height: 48px;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1;
`;

const NavLink = styled(Link)`
  width: 25%;
`;

const NavButton = styled(IconButton)`
  width: 100%;
  justify-content: center;
`;

export { Container, Spacer, NavWrapper, NavLink, NavButton };
