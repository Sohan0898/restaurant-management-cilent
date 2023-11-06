import { useLoaderData } from "react-router-dom";
import AllFoodCard from "./AllFoodCard";

const AllFood = () => {

  const addedFood = useLoaderData();
  console.log(addedFood);

  return <div>

    

<section className=" bg-base-200">
    <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-5 my-10">
        
        <form className="mt-20 md:mt-28">
            <div className="flex justify-center items-center ">
                <div className="flex-1 w-3/4 min-w-0 px-4 ">
                    <label className=""></label>
                    <input
                        type="text"
                        name="search"
                        
                        placeholder="Search your food...."
                        className="block w-full px-4 py-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-md caret-indigo-600 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                        required
                    />
                </div>

                <button type="submit" className="inline-flex items-center justify-center w-auto px-4 py-4  font-semibold text-white transition-all duration-200 bg-amber-500 border border-transparent rounded-md  hover:bg-amber-700 focus:bg-amber-700">
                    Search
                    <svg className="w-5 h-5 ml-3 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </form>

        <div>
          <h1 className="text-4xl md:text-5xl font-paytone text-center p-16"><span className="text-amber-500">Foodie Feast</span> {addedFood.length} Items</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 justify-center gap-5 items-center">
        {addedFood?.map((allFood) => (
            <AllFoodCard key={allFood._id} allFood={allFood}></AllFoodCard>
          ))}
        </div>

    </div>
</section>


  </div>;
};

export default AllFood;
