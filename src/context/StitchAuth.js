import React, { useState, useContext, useMemo} from "react";
import PropTypes from "prop-types";
import {
  hasLoggedInUser,
  loginAnonymous,
  logoutCurrentUser,
  getCurrentUser
} from "./../stitch/authentication";

const StitchAuthContext = React.createContext();

export const useStitchAuth = () => {
  const context = useContext(StitchAuthContext);
  if (!context) {
    throw new Error(`useStitchAuth must be used within a StitchAuthProvider`);
  }
  return context;
};


export const StitchAuthProvider = ({children}) => {
  const [authState, setAuthState] = useState({
    isLoggedIn: hasLoggedInUser(),
    currentUser: getCurrentUser()
  });

  // Authentication Actions
  const handleAnonymousLogin = async () => {
    const { isLoggedIn } = authState;
    if (!isLoggedIn) {
      const loggedInUser = await loginAnonymous();
      setAuthState({
        ...authState,
        isLoggedIn: true,
        currentUser: loggedInUser
      });
    }
  };
  
  const handleLogout = async () => {
    const { isLoggedIn } = authState;
    if (isLoggedIn) {
      await logoutCurrentUser();
      setAuthState({
        ...authState,
        isLoggedIn: false,
        currentUser: null
      });
    } else {
      console.log(`can't handleLogout when no user is logged in`);
    }
  };
  // We useMemo to improve performance by eliminating some re-renders
  const authInfo = useMemo(
    () => {
      const { isLoggedIn, currentUser } = authState;
      const value = {
        isLoggedIn,
        currentUser,
        actions: { handleAnonymousLogin, handleLogout }
      };
      return value;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [authState.isLoggedIn]
  );
  return (
    <StitchAuthContext.Provider value={authInfo}>
      {children}
    </StitchAuthContext.Provider>
  );
}
StitchAuthProvider.propTypes = {
  children: PropTypes.element
};
