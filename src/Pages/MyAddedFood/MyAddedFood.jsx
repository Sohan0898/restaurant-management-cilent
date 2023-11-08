import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import RowItems from "./RowItems";
import { Helmet } from "react-helmet-async";

const MyAddedFood = () => {
  const { user } = useContext(AuthContext);

  const [foodItems, setFoodItems] = useState([]);
  console.log(foodItems);

  useEffect(() => {
    fetch(` http://localhost:5000/myAddedFood?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setFoodItems(data));
  }, [user?.email]);

  return (
    
    <div className="bg-gray-600 mt-40 ">
      <Helmet>
        <title>Foodie Feast | {user?.displayName} Added Food</title>
      </Helmet>
    <div className="container mx-auto p-6 ">
        <div className="overflow-x-auto ">
            <table className="w-full  bg-white shadow-md rounded my-6">
                <thead>
                    <tr className="border-b">
                        <th className="text-left p-3 px-5 hidden sm:table-cell">Image</th>
                        <th className="text-left p-3 px-5">Name</th>
                        <th className="text-left p-3 px-5 hidden sm:table-cell">Category</th>
                        <th className="text-left p-3 px-5">Price</th>
                        <th className="text-left p-3 px-5">Update</th>
                    </tr>
                </thead>
                
                {foodItems?.map((items) => (
              <RowItems key={items._id} items={items}></RowItems>
            ))}

            </table>
        </div>
    </div>
    </div>
  );
};

export default MyAddedFood;
