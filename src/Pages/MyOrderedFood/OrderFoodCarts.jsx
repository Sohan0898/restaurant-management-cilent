
import Swal from "sweetalert2";

const OrderFoodCarts = ({ setLoading, loading,  carts }) => {
  const { _id, name,  formattedDate, image, foodName, price } = carts;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(` http://localhost:5000/orderedFood/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your cart has been deleted.", "success");
              setLoading(!loading);
            }
          });
      }
    });
  };

  return (
    <div>
      
      <div className="flex flex-col max-w-screen-2xl  px-6 md:px-10 lg:px-16 p-6 mx-auto  space-y-4 sm:p-10 ">
        
        <ul className="flex flex-col bg-slate-200 px-7  ">
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
                    <h3 className="text-xl font-semibold  sm:pr-8">
                      Food Name : {foodName}
                    </h3>
                    <p className="text-sm dark:text-gray-500">Food Owner: {name}</p>
                    <p className="text-sm dark:text-gray-500">Order Date: { formattedDate}</p>
                    
                  </div>
                  <div className="mt-4 md:mt-0 text-left md:text-right">
                    <p className="text-xl text-amber-600 font-semibold">
                      {price} $
                    </p>
                  </div>
                </div>
                <div className="flex text-sm divide-x">
                  <button
                    onClick={() => handleDelete(_id)}
                    type="button"
                    className="flex items-center px-2 py-1 pl-0 hover:text-red-500 space-x-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 fill-current"
                    >
                      <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                      <rect width="32" height="200" x="168" y="216"></rect>
                      <rect width="32" height="200" x="240" y="216"></rect>
                      <rect width="32" height="200" x="312" y="216"></rect>
                      <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                    </svg>
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="divider "></div> 
      </div>
    </div>
  );
};

export default OrderFoodCarts;
