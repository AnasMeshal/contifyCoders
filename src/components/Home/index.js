import React from "react";

// Styles
import { Button } from "@material-ui/core";
import { Wrapper, StartContainer, Title, StyledLink } from "./styles";

const Home = () => {
  return (
    <Wrapper>
      <StartContainer>
        <Title>Welcome To Contify</Title>
        <StyledLink
          to="/subjects"
          style={{
            marginTop: "auto",
            marginBottom: "30px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            style={{ marginTop: "auto", marginBottom: "30px", width: "30%" }}
          >
            Join Us!
          </Button>
        </StyledLink>
      </StartContainer>
    </Wrapper>
  );
};

export default Home;
