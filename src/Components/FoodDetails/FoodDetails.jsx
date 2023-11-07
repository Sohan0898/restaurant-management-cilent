import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const FoodDetails = () => {
  const AddedFoodDetails = useLoaderData();
  const { user } = useContext(AuthContext);

  const { _id, foodName, image, price, description, origin, name, email } =
    AddedFoodDetails;

  // If the user is the owner

  const isOwner = user?.email === email;
  const handleOrder = () => {
    if (isOwner) {
      Swal.fire({
        title: "Invalid Order",
        text: "You can't order your own food item.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      window.location.href = `/purchaseFood/${_id}`;
    }
  };

  return (
    <div className="mt-40">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={foodName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{foodName}</h2>
          <p>{description}</p>
          <p>{name}</p>
          <p>{email}</p>
          <p>{origin}</p>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleOrder}>
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
