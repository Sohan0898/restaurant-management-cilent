/* eslint-disable react/no-unescaped-entities */

import axios from "axios";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const OurMenu = () => {
  const [FoodData, setAllData] = useState([]);

  const allData = FoodData?.result;

  useEffect(() => {
    axios.get("http://localhost:5000/myAddedFood").then((response) => {
      setAllData(response.data);
    });
  }, []);

  const getRandomItems = (array, n) => {
    if (!Array.isArray(array)) {
      console.error("Error: Input is not an array");
      return [];
    }

    const shuffled = array?.slice()?.sort(() => 0.5 - Math.random());
    return shuffled?.slice(0, n);
  };

  const randomData = getRandomItems(allData, 6);

  console.log(allData);

  console.log(randomData);

  return (
    <div className="mt-20">
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Foodie Feast Special Menu
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Creating a food menu for your restaurant involves listing the
              dishes you offer along with their respective prices. Below is a
              sample menu for a fictional restaurant called "Foodie Feast" to
              give you an idea.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {randomData?.map((allfood) => (
              <Menu key={allfood._id} allfood={allfood}></Menu>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to={"/allFood"}>
              <span
                href="#"
                title=""
                className="inline-flex btn bg-amber-500 text-lg  font-medium text-white transition-all duration-200 hover:text-red-500 focus:text-red-500"
              >
                {" "}
                Check Our Menu{" "}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMenu;
