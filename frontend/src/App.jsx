import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className="font-poppins">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
