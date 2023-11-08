// import { Link } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";

const RowItems = ({ carts }) => {
  const {_id, foodName, price, rating,category, image } = carts;

  return (
    <div>
     <div className="flex flex-col max-w-screen-2xl  px-6 md:px-10 lg:px-16 p-6 mx-auto  space-y-4 sm:p-10 ">
        
        <ul className="flex flex-col bg-gray-500 px-7 rounded-lg ">
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="md:flex md:w-full space-x-2 sm:space-x-4">
              <img
                className="flex-shrink-0 w-full md:w-60 h-52 md:h-40  rounded outline-none "
                src={image}
                alt={foodName}
              />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="mt-4 md:mt-0 md:space-y-1">
                    <h3 className="text-xl font-semibold text-white sm:pr-8">
                      Food Name : {foodName}
                    </h3>
                    
                    <p className="text-sm dark:text-gray-300">Category: { category}</p>
                    <p className="text-sm dark:text-gray-300">⭐⭐⭐⭐ { rating}</p>
                    
                  </div>
                  <div className="mt-4 md:mt-0 text-left md:text-right">
                    <p className="text-xl text-red-800 font-semibold">
                      {price} $
                    </p>
                  </div>
                </div>
                <div className="flex text-sm divide-x ">
                  <Link to={`/updateFood/${_id}`}><button
                    
                    type="button"
                    className="flex items-center  text-white px-2 py-1 pl-0 hover:text-red-500 space-x-2"
                  >
                    <span className="text-white"><GrUpdate></GrUpdate></span>
                     <span>Update</span>
                  </button></Link>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="divider divide-solid    "></div> 
      </div>
    </div>
  );
};

export default RowItems;
