import React from "react";
import { useStitchAuth } from "../context/StitchAuth";
import { Button, Container } from "reactstrap";

export default () => {
  const {
    isLoggedIn,
    actions: { handleLogout }
  } = useStitchAuth();

  return (
    <>
      {isLoggedIn && (
        <Container fluid={false}>
          <Button onClick={handleLogout}>Logout</Button>
        </Container>
      )}
    </>
  );
};
