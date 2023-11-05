/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
             <div>
      <div className="grid h-screen px-4 bg-white place-content-center">
        <div className="text-center">
          <img src="https://i.ibb.co/RBJCSys/image-processing20210910-23126-qti6va.gif" alt="" />

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </h2>

          <p className=" text-gray-500">We can't find that page.</p>

          <Link>
            <button className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:ring">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
        </div>
    );
};

export default ErrorPage;