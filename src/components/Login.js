import React from 'react'
import { useStitchAuth } from '../context/StitchAuth'

export default function Login() {
  const { actions } = useStitchAuth();
  return (
    <button onClick={actions.handleAnonymousLogin}>
      Log In as a Guest User
    </button>
  );
}
