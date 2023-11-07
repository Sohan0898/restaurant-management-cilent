import { Link, useLoaderData } from "react-router-dom";
import TopFoodCard from "./TopFoodCard";

import Countdown from "./Countdown";

const TopFood = () => {
  const allFood = useLoaderData();

  const topFood = allFood.slice(0, 6);
  console.log(topFood);
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-5 my-10">
        <div className="bg-base-200 py-10 md:px-4 rounded-xl">
          <span className="w-full inline-flex justify-between items-center  py-1 px-1 pr-4 mb-7 text-white bg-red-500 rounded-full   ">
            <span className="text-sm bg-white rounded-full text-black px-4 py-1.5 mr-3">
              New
            </span>{" "}
            <span className="text-md p flex-grow px-10 ">
              <marquee direction="left">
                Limited-Time Offer: Enjoy a Culinary Adventure at Foodie Feast!
                We are offering a 15% discount on your bill for your next visit
                when you share your Foodie Feast experience on social media and
                tag us.
              </marquee>
            </span>
            <Link to={"/allFood"}>
              <svg
                className="w-2.5 h-2.5 ml-2 hover:text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </Link>
          </span>

          <div>
            <section className=" mb-8">
              <div className=" px-4 mx-auto sm:px-6 lg:px-8 ">
                <div className="grid grid-rows-1 justify-center items-center gap-6  md:flex md:justify-between md:gap-5 md:items-center md:text-left ">
                  <h1 className="text-3xl md:text-3xl lg:text-5xl font-paytone py-6 text-start mt-4">
                    <span className="text-red-500">Foodie</span>
                    <span className="text-amber-500">Feast</span> Top Food
                  </h1>

                  {/* coundowntimer here */}
                  <div className="">
                    <h1 className="text-4xl md:text-4xl text-center lg:text-6xl py-6 font-marker font-bold">
                      Black Friday{" "}
                    </h1>
                    <span className="">
                      {" "}
                      <Countdown></Countdown>
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div>
            <span></span>
          </div>
        </div>

        <div className="grid mt-16 lg:mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10 md:gap-10 lg:gap-16">
          {topFood?.map((top) => (
            <TopFoodCard key={top._id} top={top}></TopFoodCard>
          ))}
        </div>
      </div>
      <section className="py-10 bg-gray-300 sm:py-16">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center sm:flex sm:items-center sm:justify-center sm:text-left">
            <h2 className="text-5xl font-bold text-black">
              Explore our chef special food items
            </h2>

            <Link to={"/allFood"}>
              <span
                href="#"
                title=""
                className="inline-flex items-center justify-center flex-shrink-0 px-4 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 bg-amber-500 rounded-md sm:mt-0 sm:ml-8 lg:ml-16 hover:bg-red-500 focus:bg-red-500"
                role="button"
              >
                See All Food Items
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopFood;
