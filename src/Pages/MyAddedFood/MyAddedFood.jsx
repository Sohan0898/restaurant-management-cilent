import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import RowItems from "./RowItems";

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
    <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-5 mt-28">
      <h1>{foodItems.length}</h1>
      <div className="overflow-x-auto">
        <table className="table bg-base-200 ">
          {/* head */}
          <thead className=" border-b-2">
            <tr>
              <th>Photo</th>
              <th>Food Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="bg-gray-50 rounded-b-xl ">
            {/* row 1 */}
            {foodItems?.map((items) => (
              <RowItems key={items._id} items={items}></RowItems>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAddedFood;
