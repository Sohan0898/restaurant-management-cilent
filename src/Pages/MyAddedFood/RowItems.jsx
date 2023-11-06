import { Link } from "react-router-dom";

const RowItems = ({ items }) => {
  const { _id, foodName, price, category, image } = items;

  return (
    <div>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded-md w-24 h-24">
                <img src={image} alt={foodName} />
              </div>
            </div>
          </div>
        </td>
        <td>{foodName}</td>

        <td>{category}</td>
        <td>{price} $</td>
        <td>
          <Link to={`/updateFood/${_id}`}>
            <button className="btn btn-ghost btn-xs">Update</button>
          </Link>
        </td>
      </tr>
    </div>
  );
};

export default RowItems;
