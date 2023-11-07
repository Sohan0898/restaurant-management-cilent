import { Link } from "react-router-dom";


const AllFoodCard = ({allFood}) => {

    const {_id, foodName, image, category  } = allFood;


  return (

    <div className="">
      <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{foodName}</h2>
    <p>{category}</p>
    <div className="card-actions justify-end">
    <Link to={`/foodDetails/${_id}`}><button className="btn btn-primary">Buy Now</button></Link>
      
    </div>
  </div>
</div>


            
          
    </div>
  );
};

export default AllFoodCard;
