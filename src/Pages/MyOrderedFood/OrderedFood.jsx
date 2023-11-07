import { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import OrderFoodCarts from "./OrderFoodCarts";

const OrderedFood = () => {
  const [cartData, setCardData] = useState(null);

  const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(` http://localhost:5000/orderedFood/${user.email}`)
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, [user.email, loading]);

  console.log(cartData);

  return (
    <div className="max-w-screen-2xl mx-auto px-2 md:px-6 lg:px-16 my-14 pb-16">
      <h2 className="text-4xl text-center font-bold mb-6">
        <span className="text-FusionRed">
          {user?.displayName ? user?.displayName : "Login User"} s
        </span>{" "}
        Cart items
      </h2>
      <div className="pt-10">
        {cartData === null ? (
          <div className="flex justify-center items-center h-[40vh]">
            <span className=" font-montserrat text-2xl font-bold text-red-500">
              Cart is loading....
            </span>
          </div>
        ) : cartData.length > 0 ? (
          <div>
            {cartData.map((carts) => (
              <OrderFoodCarts
                key={carts._id}
                carts={carts}
                loading={loading}
                setLoading={setLoading}
              ></OrderFoodCarts>
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
              No cart item available right now!!!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderedFood;
