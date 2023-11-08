import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const FoodDetails = () => {
  const AddedFoodDetails = useLoaderData();
  const { user } = useContext(AuthContext);

  const {
    _id,
    foodName,
    image,
    price,
    description,
    origin,
    name,
    email,
    category,
    rating,
  } = AddedFoodDetails;

  // If the user is the owner cant add food

  const isOwner = user?.email === email;
  const handleOrder = () => {
    if (isOwner) {
      Swal.fire({
        title: "Invalid Order",
        text: "You can't order your own food item.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      window.location.href = `/purchaseFood/${_id}`;
    }
  };

  return (
    <div className="mt-24">
      <Helmet>
        <title>Foodie Feast | Food Details</title>
      </Helmet>
      <section className="py-10 bg-gray-50  lg:py-8">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="">
            <marquee direction="left">
              <div className="w-full mx-auto ">
                <h2 className="text-2xl text-center font-medium">
                  📣 Get a Delicious 10% Off Your First Order at Foodie Feast -{" "}
                  <span className="font-bold">
                    Use Coupon Code: FIRSTBITE10
                  </span>
                </h2>
              </div>
            </marquee>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white  lg:py-16">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
            <div className="relative lg:mb-12">
              <img
                className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
                alt=""
              />
              <div className="pl-12 pr-6">
                <img
                  className="relative w-[350px] h-[200px] md:w-[700px] md:h-[380px] rounded-md"
                  src={image}
                  alt=""
                />
              </div>
              <div className="absolute left-0 pr-8 md:pr-12 bottom-4 md:bottom-8 lg:-bottom-12">
                <div className=" bg-amber-500 rounded-lg max-w-xs md:max-w-md">
                  <div className="px-3 py-4 sm:px-5 sm:py-8">
                    <div className="flex items-start">
                      <p className="text-3xl sm:text-4xl">🍳</p>
                      <blockquote className="ml-5">
                        <p className="text-sm font-medium text-white sm:text-lg">
                          “{description}”
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="2xl:pl-16">
              <h2 className="text-2xl  font-paytone  text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                {foodName}
              </h2>
              <p className="text-md font-medium font-montserrat  text-gray-600 mt-6">
                Category : {category}
              </p>
              <p className="mt-2 text-md font-medium font-montserrat  text-gray-600">
                Made By : {name}
              </p>
              <p className="mt-2 text-md font-medium font-montserrat  text-gray-600">
                Country : {origin}
              </p>
              <p className="mt-2 text-md font-medium font-montserrat  text-gray-600">
                Rating : {rating} (⭐⭐⭐⭐)
              </p>
              <p className="mt-2 text-md font-medium font-montserrat  text-gray-600">
                Price : {price} $
              </p>

              <button
                onClick={handleOrder}
                className="mt-9 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                <svg
                  className="w-3.5 h-3.5 mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                Order now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodDetails;
