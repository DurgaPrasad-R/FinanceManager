import { createContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    isLoading,
    loginWithPopup,
    logout: auth0Logout,
  } = useAuth0();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      setUserData(user);
    } else {
      setUserData(null);
    }
  }, [isAuthenticated, user]);

  const logout = () => {
    setUserData(null);

    auth0Logout({ returnTo: window.location.origin });
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        isAuthenticated,
        loginWithRedirect,
        loginWithPopup,
        isLoading,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
