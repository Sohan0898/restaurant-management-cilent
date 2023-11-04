import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";

const Login = () => {

    const { googleSignIn, signInWithEmail } = useContext(AuthContext);
const [logError, setLogError] = useState("");
const navigate = useNavigate();

const handleGoogleSignIn = () => {
googleSignIn()
.then((result) => {
console.log(result.user);    

Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You Successfully Login",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  })
  .catch((error) => {
    console.error(error);
  });

};

const handleLogin = (e) => {
e.preventDefault();
const form = new FormData(e.currentTarget);
const email = form.get("email");
const password = form.get("password");
console.log(email, password);
setLogError("");

// login user

signInWithEmail(email, password)
  .then((result) => {
    console.log(result.user);
    e.target.reset();

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "You Successfully Login",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  })
  .catch((error) => {
    console.error(error);
    setLogError(error.message);
  });

};


  return (
    <div>
      <section className="bg-base-100">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-base-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
                Sign in to your account
              </h1>
              <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" >
                <div>
                  <label className="block mb-2 text-sm font-medium ">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium ">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>

                    {logError && (
                    <p className="text-FusionRed font-semibold pt-2">
                      {logError}
                    </p>
                  )}
                    <div className="ml-3 text-sm">
                      <label className="">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full btn  bg-amber-500 hover:bg-amber-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center  "
                >
                  Sign in
                </button>
                <p className="text-sm font-light ">
                  Don’t have an account yet?{" "}
                  <Link to={'/register'}><span
                    href="#"
                    className="font-medium text-amber-500 hover:underline "
                  >
                    Sign up
                  </span></Link>
                </p>
              </form>
              <div className="mt-3 space-y-3">
                <button
                  onClick={handleGoogleSignIn}
                  type="button"
                  className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold transition-all duration-200 bg-base-100 border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover: focus: focus:outline-none"
                >
                  <div className="absolute inset-y-0 left-0 p-4">
                    <svg
                      className="w-6 h-6 text-rose-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                    </svg>
                  </div>
                  Sign in with Google
                </button>

                <button
                  type="button"
                  className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold  transition-all duration-200 bg-base-100 border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover: focus: focus:outline-none"
                >
                  <div className="absolute inset-y-0 left-0 p-4">
                    <svg
                      className="w-6 h-6 text-[#2563EB]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                  </div>
                  Sign in with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
