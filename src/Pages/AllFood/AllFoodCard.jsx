import { Link } from "react-router-dom";


const AllFoodCard = ({allFood}) => {

    const {_id, foodName, image, category, price , quantity  } = allFood;


  return (
    <div className="">
      <div className="card  bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src={image}
            alt={foodName}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{foodName}</h2>
          <p>{price}</p>
          <p>{category}</p>
          <p>{quantity}</p>
          <div className="card-actions justify-end">
            <Link to={`/foodDetails/${_id}`}><button className="btn btn-primary">see details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFoodCard;
