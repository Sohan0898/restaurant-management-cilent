import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const FoodPurchase = () => {
  const AddedFoodDetails = useLoaderData();
  const { user } = useContext(AuthContext);
  const { foodName, image, price, quantity, origin, name } = AddedFoodDetails;

  const handleOrderFood = (event) => {
    event.preventDefault();
    const form = event.target;
    const orderedQuantity = parseInt(form.orderedQuantity.value, 10);

    // order quantity 0 or greater than

    if (orderedQuantity <= 0) {
      Swal.fire({
        icon: "error",
        title: "Invalid Quantity",
        text: "Please enter a valid quantity.",
      });
      return;
    }

    if (orderedQuantity > quantity) {
      Swal.fire({
        icon: "error",
        title: "Quantity Exceeds Availability",
        text: "You can't buy more than the available quantity.",
      });
      return;
    }

    if (user) {
      const newEmail = user?.email;
      const newName = user?.displayName;

      // ordered date send to DB
      const today = new Date();
      const options = {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
      };
      const formattedDate = today.toLocaleDateString("en-US", options);

      const newOrderedFood = {
        newEmail,
        newName,
        name,
        image,
        foodName,
        origin,
        price,
        orderedQuantity,
        formattedDate,
      };

      axios
        .post("http://localhost:5000/orderedFood", newOrderedFood, {
          withCredentials: true,
        })
        .then((response) => {
          const data = response.data;
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "You ordered food successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.error("error on fetch: ", error);
        });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Foodie Feast | Food Purchase</title>
      </Helmet>
      <div className=" mt-16 md:mt-10 ">
        <section className="py-10 bg- sm:py-16 lg:py-16">
          <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16">
            <div className="mx-auto  mt-12 overflow-hidden bg-white border rounded-md  lg:mt-14">
              <div className="grid items-stretch grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-3">
                  <div className="p-6 sm:p-10">
                    <h3 className="text-2xl font-semibold text-red-500">
                      Order your desire food item
                    </h3>

                    <form onSubmit={handleOrderFood} className="mt-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                        <div>
                          <label className="text-base font-medium text-gray-900">
                            {" "}
                            Food Name{" "}
                          </label>
                          <div className="mt-2.5 relative">
                            <input
                              type="text"
                              name="foodName"
                              readOnly
                              defaultValue={foodName}
                              className="block w-full px-4 py-4 text-black placeholder-gray-300 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-red-600 focus:bg-white caret-red-600"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-base font-medium text-gray-900">
                            {" "}
                            Food Price{" "}
                          </label>
                          <div className="mt-2.5 relative">
                            <input
                              type="price"
                              name="price"
                              readOnly
                              defaultValue={price}
                              className="block w-full px-4 py-4 text-black placeholder-gray-300 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-red-600 focus:bg-white caret-red-600"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <label className="text-base font-medium text-gray-900">
                            {" "}
                            Food Quantity{" "}
                          </label>
                          <div className="mt-2.5 relative">
                            <input
                              type="text"
                              name="orderedQuantity"
                              required
                              defaultValue={quantity}
                              className="block w-full px-4 py-4 text-black placeholder-gray-300 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-red-600 focus:bg-white caret-red-600"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-base font-medium text-gray-900">
                            {" "}
                            Buyer Name{" "}
                          </label>
                          <div className="mt-2.5 relative">
                            <input
                              defaultValue={user?.displayName}
                              readOnly
                              className="block w-full px-4 py-4 text-black placeholder-gray-300 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-red-600 focus:bg-white caret-red-600"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-base font-medium text-gray-900">
                            {" "}
                            Buyer Email{" "}
                          </label>
                          <div className="mt-2.5 relative">
                            <input
                              defaultValue={user?.email}
                              readOnly
                              className="block w-full px-4 py-4 text-black placeholder-gray-300 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-red-600 focus:bg-white caret-red-600"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label className="text-base font-medium text-gray-900">
                            {" "}
                            Anything else? (optional){" "}
                          </label>
                          <div className="mt-2.5 relative">
                            <textarea
                              type="text"
                              name="description"
                              placeholder="Extra cheese, mayonnaise or suace etc."
                              className="block w-full px-4 h-16 py-4 text-black placeholder-gray-300 transition-all duration-200 border border-gray-200 rounded-md resize-y bg-gray-50 focus:outline-none focus:border-red-600 focus:bg-white caret-red-600"
                              rows="4"
                            ></textarea>
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <button
                            type="submit"
                            className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-gradient-to-r from-red-900 to-amber-500  border-transparent rounded-md focus:outline-none hover:bg-gradient-to-r hover:from-amber-500 hover:to-red-900 focus:bg-red-900"
                          >
                            Order Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="bg-gray-100 lg:col-span-2">
                  <div className="h-full p-6 sm:p-10">
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <div className="mt-8 space-y-7">
                          <img
                            className="w-full h-full "
                            src="https://i.ibb.co/P1GnWQz/Add-Desire-food-5.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FoodPurchase;
