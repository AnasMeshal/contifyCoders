import styled from "styled-components";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";

export const CardsContainer = styled.div`
  display: flex;
  width: 60%;
  flex-wrap: wrap;
`;

export const StyledCard = styled(Card)`
  width: 400px;
  margin: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Linking = styled(Link)`
  color: black;
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`;

export const StyledSubjectImage = styled.img`
  width: 100%;
  height: 200px;
`;
