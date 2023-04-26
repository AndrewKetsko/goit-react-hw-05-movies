import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.ul`
display:flex;
justify-content: center;
align-items: center;
gap: 50px;
height:70px;
`;

export const StyledLink = styled(NavLink)`
  color: #212121;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 30px;
`;