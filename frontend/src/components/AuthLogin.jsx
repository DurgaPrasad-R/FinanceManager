import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
const AuthLogin = () => {
  const {
    loginWithRedirect,
    loginWithPopup,
    logout,
    user,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
  } = useAuth0();
  const Click1 = async () => {
    try {
      let token = await getAccessTokenSilently();
      let response = await axios.get("http://localhost:3000/protected", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("response", response);
    } catch (error) {
      console.log(error.message);
    }
  };
  const Click = async () => {
    try {
      // let token = await getAccessTokenSilently();
      let response = await axios.post("http://localhost:3000/");
      console.log("response", response);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="h-custom-height">
      <h1>Vite + React + Auth0</h1>
      <Button onClick={Click1}>Protected API</Button>
      <Button onClick={Click}>Index API</Button>
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
