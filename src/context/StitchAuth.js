import React, { useEffect, useState, useContext, useMemo} from "react";
import PropTypes from "prop-types";
import {
  hasLoggedInUser,
  loginAnonymous,
  logoutCurrentUser,
  loginGoogle,
  getCurrentUser,
  addAuthenticationListener,
  removeAuthenticationListener,
  handleOAuthRedirects
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

  useEffect(() => {
    const authListener = {
        onUserLoggedIn: (auth, loggedInUser) => {
        if (loggedInUser) {
            setAuthState(authState => ({
            ...authState,
            isLoggedIn: true,
            currentUser: loggedInUser,
            }));
        }
        },
        onUserLoggedOut: (auth, loggedOutUser) => {
        setAuthState(authState => ({
            ...authState,
            isLoggedIn: false,
            currentUser: null,
        }));
        }
    };
    addAuthenticationListener(authListener);
    handleOAuthRedirects();
    setAuthState(state => ({ ...state}));
    return () => {
        removeAuthenticationListener(authListener);
    };
}, []);




  // Authentication Actions
  const handleLogin = async (provider) => {
    if (!authState.isLoggedIn) {
        switch(provider) {
        case "anonymous": return loginAnonymous()
        case "google": return loginGoogle()
        default: {}
        }
    }
  }
  
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
      // TODO: remove logger
      console.log(currentUser)
      const value = {
        isLoggedIn,
        currentUser,
        actions: { handleLogin, handleLogout }
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
