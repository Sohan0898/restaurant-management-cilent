import { Link } from "react-router-dom";

const TopFoodCard = ({ top }) => {
  const { _id, foodName, price, image, category } = top;
  return (
    <div>
      <div className="card glass">
        <figure>
          <img src={image} alt={foodName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{foodName}</h2>
          <p>{price}</p>
          <p>{category}</p>
          <div className="card-actions justify-end">
            <Link to={`/foodDetails/${_id}`}>
              <button className="btn btn-primary">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFoodCard;
