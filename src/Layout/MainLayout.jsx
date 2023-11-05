import { Outlet, useLocation } from "react-router-dom";

import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Header/Navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";

  return (
    <div className="font-gabarito">
      {isHomeRoute ? null : <Navbar />}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
