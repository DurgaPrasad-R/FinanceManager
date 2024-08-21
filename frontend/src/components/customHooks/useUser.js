import { useContext } from "react";
import UserContext from "../../components/contexts/UserContext";

export const useUser = () => useContext(UserContext);
