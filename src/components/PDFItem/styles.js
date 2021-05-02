import { Link } from "react-router-dom";
import styled from "styled-components";

export const TitlePDF = styled.h3`
  text-align: left;
  font-size: 25px;
  text-decoration: underline;
  margin: 30px;
`;

export const LinkStyled = styled(Link)`
  color: black;
  text-decoration: none;
  :hover {
    text-decoration: none;
  }

  :active {
    text-decoration: none;
  }
`;
