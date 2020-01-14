import React from "react";
import { useStitchAuth } from "../context/StitchAuth";

export default () => {
  const { actions } = useStitchAuth();
  return (
    <>
      <button onClick={() => actions.handleLogin("anonymous")}>
        Log In as a Guest User
      </button>
      <button provider="google" onClick={() => actions.handleLogin("google")}>
        Log In with Google
      </button>
    </>
  );
};
