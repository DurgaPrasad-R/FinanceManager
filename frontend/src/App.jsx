import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import NavBar from "./components/NavBar";
const App = () => {
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
    <>
      <NavBar />
      <div>
        <h1>Vite + React + Auth0</h1>
        <button onClick={Click1}>Protected API</button>
        <button onClick={Click}>Index API</button>
        <button onClick={loginWithPopup}>Login With Popup</button>
        <br />
        <button onClick={loginWithRedirect}>Login with Redirect</button>
        <br />
        <button onClick={logout}>Logout</button>
        <br />
        {isAuthenticated ? "Logged in" : "Not Logged in"}
        <br />
        {isAuthenticated && JSON.stringify(user)}
      </div>
    </>
  );
};

export default App;
