import React from "react";
import { useStitchAuth } from "../context/StitchAuth";
import { Button, Input } from "reactstrap";
import {
  loginEmailPassword,
  registerEmailPasswordUser,
  resendConfirmationEmail,
  // confirmEmailPasswordUser
} from "./../stitch/authentication";
import { toast } from 'react-toastify'

import styled from "@emotion/styled";
import useFormInput from "../hooks/useFormInput";

const ButtonContainer = styled.div({
  margin: "100px auto",
  display: "flex",
  flexDirection: "column",
  minHeight: "550px",
  width: "300px",
  justifyContent: "space-around",
  textAlign: "center",
  "@media (max-width: 430px)": {
    minHeight: "500px"
  }
});

const babyEmojies = ["👶🏼", "👶🏼", "👶🏻", "👶🏽", "👶🏾"];
const babyEmoji = babyEmojies[Math.floor(Math.random() * babyEmojies.length)];

export default () => {
  const {
    actions: { handleLogin }
  } = useStitchAuth();
  const emailInput = useFormInput("email");
  const passwordInput = useFormInput("password");


  const handleLoginUsernamePassword = async () => {

      loginEmailPassword(emailInput.attributes.value, passwordInput.attributes.value).catch(err => {
        debugger
        const invalidEmailOrPassword = /invalid username\/password/.test(
          err.message,
        );
        if (invalidEmailOrPassword)
          debugger
      });
    }



  const handleRegistration = async () => {

    const toastSuccessfulRegistration = () => {
      debugger
      toast(`Sent a registration email to ${emailInput.attributes.value}`, {
        type: toast.TYPE.SUCCESS
      });
    };

    const handleUnsuccessfulRegistration = async () => {
      try {
        await resendConfirmationEmail(emailInput.attributes.value);
        toastSuccessfulRegistration();
      } catch (err) {
        const alreadyConfirmed = /already confirmed/.test(err.message);
        console.log(alreadyConfirmed)
      }
    };

    registerEmailPasswordUser(emailInput.attributes.value, passwordInput.attributes.value)
      .then(toastSuccessfulRegistration)
      .catch(handleUnsuccessfulRegistration);
  };

  return (
    <ButtonContainer>
      <div>
        <h1>Baby Guess</h1>
        <span style={{ fontSize: 128 }} role="img" aria-label="baby-emoji">
          {babyEmoji}
        </span>
      </div>
      <Input type="email" {...emailInput.attributes} />
      <Input
        type="password"
        placeholder="password"
        {...passwordInput.attributes}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 20
        }}
      >
        <Button
          onClick={handleLoginUsernamePassword
          }
          style={{ width: 135 }}
        >
          Log in
        </Button>
        <Button
          onClick={handleRegistration
          }
          style={{ width: 135 }}
        >
          Register
        </Button>
      </div>
      <Button onClick={() => handleLogin("anonymous")}>
        Log In as a Guest User
      </Button>
      <Button provider="google" onClick={() => handleLogin("google")}>
        Log In with Google
      </Button>
    </ButtonContainer>
  );
};
