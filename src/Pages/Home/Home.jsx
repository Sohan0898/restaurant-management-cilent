import Banner from "../../Components/Header/Banner/Banner";
import Navbar from "../../Components/Header/Navbar/Navbar";
import ExtraOne from "../../Components/Main/ExtraOne/ExtraOne";
import ExtraTwo from "../../Components/Main/ExtraTwo/ExtraTwo";
import TopFood from "../../Components/Main/TopFood/TopFood";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <TopFood></TopFood>
      <ExtraOne></ExtraOne>
      <ExtraTwo></ExtraTwo>
    </div>
  );
};

export default Home;
