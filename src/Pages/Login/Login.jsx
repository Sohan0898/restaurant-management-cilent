import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { googleSignIn, signInWithEmail } = useContext(AuthContext);
  const [logError, setLogError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

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
        navigate(location?.state ? location?.state : "/");
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
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setLogError(error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Foodie Feast | Login</title>
      </Helmet>
      <section className="bg-base-100  pt-5 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-8  bg-base-100 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className=" border rounded-lg py-9 px-6 ">
              <h2 className="text-3xl font-bold leading-tight text-black md:text-4xl">
                Welcome Back <span className="text-red-500">Foodie!</span>
              </h2>
              <p className="mt-2 text-base text-gray-600">
                New on Foodie Feast?{" "}
                <Link to={"/register"}>
                  <span className="font-medium text-red-600 transition-all duration-200 hover:text-red-700 hover:underline focus:text-red-700">
                    Sign Up
                  </span>
                </Link>
              </p>

              <form onSubmit={handleLogin} className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        required
                        id=""
                        placeholder="noreply@email.com"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-red-600 focus:bg-white caret-red-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900">
                      {" "}
                      Password{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="password"
                        name="password"
                        required
                        id=""
                        placeholder="••••••••••"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-red-600 focus:bg-white caret-red-600"
                      />
                    </div>
                  </div>

                  {logError && (
                    <p className="text-red-500 font-semibold pt-2">
                      ⚠️{logError}
                    </p>
                  )}

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="agree"
                      id="agree"
                      className="w-5 h-5 text-red-600 bg-white border-gray-200 rounded"
                    />

                    <label className="ml-3 text-sm font-medium text-gray-500">
                      I agree to Foodie Feast{" "}
                      <a
                        href="#"
                        title=""
                        className="text-blue-600 hover:text-red-700 hover:underline"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        title=""
                        className="text-blue-600 hover:text-red-700 hover:underline"
                      >
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-red-600 border border-transparent rounded-md focus:outline-none hover:bg-red-700 focus:bg-red-700"
                    >
                      Login to account
                    </button>
                  </div>
                </div>
              </form>

              <div className="mt-3 space-y-3">
                <button
                  onClick={handleGoogleSignIn}
                  type="button"
                  className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                >
                  <div className="absolute inset-y-0 left-0 px-4 pt-2">
                    <img
                      className="w-10 "
                      src="https://i.ibb.co/TT9y98j/icons8-google-48-1.png"
                      alt=""
                    />
                  </div>
                  Sign in with Google
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
            <div>
              <img
                className="w-full h-[60vh] mx-auto"
                src="https://i.ibb.co/B46spFX/Untitled-40-x-40-in-40-x-30-in.png"
                alt=""
              />

              <div className="w-full max-w-md mx-auto xl:max-w-xl">
                <h3 className="text-2xl font-bold text-center text-black">
                  Foodie Feast Login
                </h3>
                <p className="leading-relaxed text-center text-gray-500 mt-2.5">
                  Sign in to Foodie Feast and continue your culinary journey.
                  Explore a world of flavors, connect with fellow foodies, and
                  savor delightful recipes and dining experiences. Your next
                  delicious adventure awaits!
                </p>

                <div className="flex items-center justify-center mt-10 space-x-3">
                  <div className="bg-red-500 rounded-full w-20 h-1.5"></div>

                  <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>

                  <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
