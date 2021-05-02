import styled from "styled-components";
import "../../index.css";

import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 60%;
  margin: auto;
  height: 500px;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Title = styled.h2`
  font-size: 40px;
  font-family: "Roboto", sans-serif;
  color: black;
  margin-top: auto;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  :hover {
    text-decoration: none;
  }

  :active {
    text-decoration: none;
  }
`;
