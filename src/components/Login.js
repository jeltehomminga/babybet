import React from "react";
import { useStitchAuth } from "../context/StitchAuth";
import { Button, } from 'reactstrap';
import { loginEmailPassword, registerEmailPasswordUser, resendConfirmationEmail, confirmEmailPasswordUser } from './../stitch/authentication'

import  styled  from '@emotion/styled'

const ButtonContainer = styled.div({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '400px',
  width: '300px',
  justifyContent: 'space-around',
  textAlign: 'center'
})

export default () => {
  const { actions : { handleLogin} } = useStitchAuth();
  // const allAuth = useStitchAuth();
  // console.log('allAuth', allAuth)
  const babyEmojies = ['👶🏼', '👶🏼', '👶🏻','👶🏽','👶🏾']

  return (
    <ButtonContainer>
          <div>
      <h1>Baby Guess</h1>
      <span style={{ fontSize: 128 }} role="img" aria-label="baby-emoji">
        {babyEmojies[Math.floor(Math.random() * babyEmojies.length)]}
      </span>
    </div>
    <input type='email' />
    <input type='password' />
      <Button onClick={() => handleLogin("anonymous")}>
        Log In as a Guest User
      </Button>
      <Button provider="google" onClick={() => handleLogin("google")}>
        Log In with Google
      </Button>
    </ButtonContainer>
  );
};
