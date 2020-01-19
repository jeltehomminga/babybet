import { AnonymousCredential, GoogleRedirectCredential, UserPasswordAuthProviderClient, UserPasswordCredential  } from "mongodb-stitch-browser-sdk";
import { app } from "./app.js";

export function loginAnonymous() {
  // Allow users to log in anonymously
  const credential = new AnonymousCredential();
  return app.auth.loginWithCredential(credential);
}

export function hasLoggedInUser() {
  // Check if there is currently a logged in user
  return app.auth.isLoggedIn;
}

export function getCurrentUser() {
  // Return the user object of the currently logged in user
  return app.auth.isLoggedIn ? app.auth.user : null;
}

export function logoutCurrentUser() {
  // Logout the currently logged in user
  const user = getCurrentUser();
  return app.auth.logoutUserWithId(user.id);
}

export function addAuthenticationListener(listener) {
  app.auth.addAuthListener(listener);
}
export function removeAuthenticationListener(listener) {
  app.auth.removeAuthListener(listener);
}

export async function loginGoogle() {
  return await app.auth.loginWithRedirect(new GoogleRedirectCredential());
}

export function handleOAuthRedirects() {
  if (app.auth.hasRedirectResult()) {
      return app.auth.handleRedirectResult();
  }
};


// Manual email password login without OAuth Provider

export const loginEmailPassword = async (email, password) => {
  const credential = new UserPasswordCredential(email, password)
  return await app.auth.loginWithCredential(credential)
}

const getEmailPasswordClient = () => app.auth.getProviderClient(UserPasswordAuthProviderClient.factory)

export const registerEmailPasswordUser = async (email, password) => {
  const emailPasswordAuth = getEmailPasswordClient()
  return await emailPasswordAuth.registerWithEmail(email, password)
}

export async function resendConfirmationEmail(email) {
  const emailPasswordAuth = getEmailPasswordClient();
  return await emailPasswordAuth.resendConfirmationEmail(email);
}


export async function confirmEmailPasswordUser() {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");
  const tokenId = urlParams.get("tokenId");
  const emailPasswordAuth = getEmailPasswordClient();
  return await emailPasswordAuth.confirmUser(token, tokenId);
}

