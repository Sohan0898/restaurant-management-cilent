import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const navMenu = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-400" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allFood"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-400" : ""
          }
        >
          All Food
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-400" : ""
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="">
      <nav className="bg-base-200 fixed w-full z-20 top-0 left-0">
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-20 py-4 flex flex-wrap items-center justify-between">
          <span className="flex items-center">
            <Logo></Logo>
          </span>
          <div className="flex lg:order-2">
            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2   text-center mr-3 lg:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Login
            </button>
            <div
              className="dropdown dropdown-bottom dropdown-end inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              data-collapse-toggle="navbar-sticky"
              type="button"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <label tabIndex={0} className="btn m-1">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content mt-3 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navMenu}
              </ul>
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 ">
              {navMenu}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
