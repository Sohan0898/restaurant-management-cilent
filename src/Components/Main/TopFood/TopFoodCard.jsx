import { Link } from "react-router-dom";
import "./hover.css";

const TopFoodCard = ({ top }) => {
  const { _id, foodName, price, image, category, rating } = top;
  return (
    <div>
      <div className=" ">
        <div className="image-container">
          <img
            className="image rounded-sm rounded-b-none w-full md:h-[250px] lg:h-[300px] hover:"
            src={image}
            alt={foodName}
          />
          <div className="image-info">
            <div className="pl-2 ">
              <h2 className="text-3xl font-semibold">{foodName}</h2>
              <div className="pt-3 text-md text-gray-300 font-montserrat">
                <p>
                  <span className="font-semibold ">Category :</span> {category}
                </p>
                <p className="pt-1">
                  <span className="font-semibold ">price :</span> {price}$
                </p>
                <span className="pt-3">
                  ({rating}){" "}
                  <span className="rating rating-sm">
                    {" "}
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="">
            <Link to={`/foodDetails/${_id}`}>
              <button className="btn rounded-t-none rounded-sm capitalize text-lg text-white bg-amber-500 border-none btn-block">
                {foodName} Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFoodCard;
