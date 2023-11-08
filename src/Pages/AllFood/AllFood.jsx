import { useLoaderData } from "react-router-dom";
import AllFoodCard from "./AllFoodCard";
import { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const AllFood = () => {
  const addedFood = useLoaderData();
const{loading} =useContext(AuthContext);
  const [searchFood, setSearchFood] = useState("");
  const [filteredFood, setFilteredFood] = useState(addedFood);
  const [countData, setCountData] = useState();
  const [currentPage , setCurrentPage] = useState(0);

   //pagination
  useEffect(() => {
    fetch(` http://localhost:5000/myAddedFoodCount`)
      .then((res) => res.json())
      .then((data) => setCountData(data));
  }, []);

  console.log(countData?.count);

  const foodsPerPage = 9;
  const noOfPages = Math.ceil(countData?.count/foodsPerPage);

  const pages = []
  for(let i = 0; i < noOfPages; i++){
    pages.push(i)
  }

  console.log(pages);


  const handlePrev = () =>  {
    if (currentPage > 0){
      setCurrentPage (currentPage-1);
    }

  }
  const handleNext = () =>  {
    if (currentPage < pages.length - 1){
      setCurrentPage (currentPage + 1);
    }

  }


  if (loading) {
    return (
      <div className="flex justify-center items-center w-2/5 mx-auto h-[100vh]">
        <img src="https://i.ibb.co/0sDxQzn/drawing-2802.gif" alt="" />
      </div>
    );
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const filter = addedFood.filter((allFood) =>
      allFood.foodName.toLowerCase().includes(searchFood.toLowerCase())
    );
    setFilteredFood(filter);
  };



  return (
    <div>
      <Helmet>
        <title>Foodie Feast | All Food</title>
      </Helmet>
      <section className=" bg-base-100">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-5 my-10">
          <form onSubmit={handleSearch} className=" mt-20 md:mt-28">
            <div className="flex justify-center items-center ">
              <div className="flex-1 w-3/4 min-w-0 px-4 ">
                <label className=""></label>
                <input
                  type="text"
                  name="search"
                  placeholder="Search your desire food item...."
                  className="block w-full px-4 py-4 text-base bg-gray-200 text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-md caret-indigo-600 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
                  value={searchFood}
                  onChange={(e) => setSearchFood(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center w-auto px-8 py-4  font-semibold text-white transition-all duration-200 bg-amber-500 border border-transparent rounded-md  hover:bg-amber-700 focus:bg-amber-700"
              >
                Search
                <span className="pl-2 text-xl">
                  {" "}
                  <FaSearch></FaSearch>
                </span>
              </button>
            </div>
          </form>

          <div>
            <h1 className="text-4xl md:text-5xl font-paytone text-center p-16">
              <span className="text-amber-500">Foodie Feast</span> All Items :{" "}
              {filteredFood.length}
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10">
            {filteredFood?.map((allFood) => (
              <AllFoodCard key={allFood._id} allFood={allFood}></AllFoodCard>
            ))}
          </div>
        </div>
      </section>

              <div className="text-center space-x-2   py-10">
                
                <button onClick={handlePrev}
                className="btn">prev</button>
                {
                  pages.map(page => <button 

                    onClick={()=> setCurrentPage(page)}
                    className={`btn px-6     ${currentPage === page ? 'active bg-red-500 text-white' : ''}`}
                    key={page} >{page}</button>)
                }
                <button onClick={handleNext} className="btn">next</button>
              </div>

    </div>
  );
};

export default AllFood;
