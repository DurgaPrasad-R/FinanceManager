import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";

const AuthLogin = () => {
  const {
    loginWithRedirect,
    loginWithPopup,
    logout,
    user,
    isAuthenticated,
    isLoading,
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-custom-height">
      <h1>Vite + React + Auth0</h1>
      <Button onClick={loginWithPopup}>Login With Popup</Button>
      <br />
      <Button onClick={loginWithRedirect}>Login with Redirect</Button>
      <br />
      <Button onClick={logout}>Logout</Button>
      <br />
      {isAuthenticated ? "Logged in" : "Not Logged in"}
      <br />
      {isAuthenticated && JSON.stringify(user)}
    </div>
  );
};

export default AuthLogin;
