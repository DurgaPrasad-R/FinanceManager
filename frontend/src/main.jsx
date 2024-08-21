import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider } from "@/components/contexts/ThemeProviderContext";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { UserProvider } from "./components/contexts/UserContext";
import AuthLogin from "./components/AuthLogin";
import EditProfile from "./components/EditProfile";
import Home from "./components/Home";
import Transactions from "./components/Transactions";
import Budget from "./components/Budget";
import Goals from "./components/Goals";
import Reports from "./components/Reports";
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "edit-profile",
        element: <EditProfile />,
      },
      {
        path: "login",
        element: <AuthLogin />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
      {
        path: "budget",
        element: <Budget />,
      },
      {
        path: "goals",
        element: <Goals />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "this is my identifier for manager",
        scope:
          "openid profile email read:current_user update:current_user_metadata",
      }}
    >
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </Auth0Provider>
  </ThemeProvider>
);
