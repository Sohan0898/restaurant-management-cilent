import { Link } from "react-router-dom";


const Menu = ({allfood}) => {

    const {_id, foodName, image, price ,rating ,description }=allfood;
    return (
        <div>
            <div className="overflow-hidden bg-white rounded shadow">
              <div className="p-8">
                <div className="flex items-center">
                  <img
                    className="flex-shrink-0 w-32 h-24"
                    src={image}
                    alt=""
                  />
                  <div className="ml-5 mr-auto">
                    <p className="text-xl h-16 font-semibold text-black">
                      {foodName}
                    </p>
                    <p className="mt-px text-sm text-gray-600">${price}</p>
                    <p className="mt-px text-sm text-gray-600">({rating}) ⭐⭐⭐⭐⭐</p>
                  </div>
                  <Link to={`/foodDetails/${_id}`}><svg
                    className="block w-6 h-6 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg></Link>
                </div>
                <p className="text-base h-24 leading-relaxed text-gray-600 mt-7">
                 {description}
                </p>
              </div>
            </div>
        </div>
    );
};

export default Menu;