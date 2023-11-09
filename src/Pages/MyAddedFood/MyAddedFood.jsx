/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import RowItems from "./RowItems";
import { Helmet } from "react-helmet-async";

const MyAddedFood = () => {
  const { user, loading } = useContext(AuthContext);

  const [foodItems, setFoodItems] = useState([]);
  console.log(foodItems?.result);

  useEffect(() => {
    fetch(
      ` https://restaurant-management-server-delta.vercel.app/myAddedFood?email=${user?.email}`,
      { credentials: "include" }
    )
      .then((res) => res.json())
      .then((data) => setFoodItems(data));
  }, [user?.email]);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-2/5 mx-auto h-[100vh]">
        <img src="https://i.ibb.co/0sDxQzn/drawing-2802.gif" alt="" />
      </div>
    );
  }

  return (
    <div className="mt-40 ">
      <Helmet>
        <title>Foodie Feast | {user?.displayName} Added Food</title>
      </Helmet>
      <div className="max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-16 my-14 pb-16">
        <h2 className="text-4xl text-center font-bold mt-36">
          <span className="text-red-500">
            {user?.displayName ? user?.displayName : "Login User"}'s
          </span>{" "}
          Added items
        </h2>
        <div className="pt-10">
          {foodItems === "" ? (
            <div className="flex justify-center items-center h-[40vh]">
              <span className=" font-montserrat text-2xl font-bold text-red-500">
                Items is loading....
              </span>
            </div>
          ) : foodItems?.result?.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5">
              {foodItems?.result?.map((carts) => (
                <RowItems key={carts._id} carts={carts}></RowItems>
              ))}
            </div>
          ) : (
            <div className="min-h-[40vh] w-auto text-center">
              <img
                className="h-[400px] mx-auto"
                src="https://i.ibb.co/Fx7ZLsB/Untitled-design-1.png"
                alt=""
              />
              <p className="text-2xl lg:text-4xl font-bold pb-14">
                No Food items available right now!!!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAddedFood;
