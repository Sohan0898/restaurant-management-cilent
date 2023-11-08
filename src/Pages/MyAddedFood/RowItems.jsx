// import { Link } from "react-router-dom";

const RowItems = ({ items }) => {
  const { foodName, price, category, image } = items;

  return (
    <div>
      <tbody>
        <tr className="border-b hover:bg-orange-100">
          <td className="p-3 px-5 hidden sm:table-cell">
            <img
              src={image}
              alt="Sample Image"
              className="w-16 h-16 object-cover"
            />
          </td>
          <td className="p-3 px-5">{foodName}</td>
          <td className="p-3 px-5 hidden sm:table-cell">{category}</td>
          <td className="p-3 px-5">{price}</td>
          <td className="p-3 px-5">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Update
            </button>
          </td>
        </tr>
      </tbody>
    </div>
  );
};

export default RowItems;
