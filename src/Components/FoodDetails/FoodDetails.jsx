import { Link, useLoaderData } from "react-router-dom";


const FoodDetails = () => {

    const AddedFoodDetails = useLoaderData();

    const {_id, foodName , image, price, description , origin, name, email} = AddedFoodDetails;


    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={image} alt={foodName}/></figure>
  <div className="card-body">
    <h2 className="card-title">{foodName}</h2>
    <p>{description}</p>
    <p>{name}</p>
    <p>{email}</p>
    <p>{origin}</p>
    <p>{price}</p>
    <div className="card-actions justify-end">
      <Link to={`/purchaseFood/${_id}`}><button className="btn btn-primary">Order</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default FoodDetails;