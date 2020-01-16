import React from "react";
import { useStitchAuth } from "../context/StitchAuth";
import { Button, } from 'reactstrap';

import  styled  from '@emotion/styled'

const ButtonContainer = styled.div({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100px',
  width: '300px',
  justifyContent: 'space-between'
})

export default () => {
  const { actions } = useStitchAuth();
  return (
    <ButtonContainer>
      <Button onClick={() => actions.handleLogin("anonymous")}>
        Log In as a Guest User
      </Button>
      <Button provider="google" onClick={() => actions.handleLogin("google")}>
        Log In with Google
      </Button>
    </ButtonContainer>
  );
};
