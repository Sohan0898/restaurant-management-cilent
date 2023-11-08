
import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Header/Banner/Banner";
import Navbar from "../../Components/Header/Navbar/Navbar";
import ExtraOne from "../../Components/Main/ExtraOne/ExtraOne";
import ExtraTwo from "../../Components/Main/ExtraTwo/ExtraTwo";
import TopFood from "../../Components/Main/TopFood/TopFood";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Foodie Feast | Home</title>
      </Helmet>
      <Navbar></Navbar>
      <Banner></Banner>
      <TopFood></TopFood>
      <ExtraTwo></ExtraTwo>
      <ExtraOne></ExtraOne>
    </div>
  );
};

export default Home;
