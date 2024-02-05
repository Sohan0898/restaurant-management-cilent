import { useContext, useState } from "react";

import Swal from "sweetalert2";

import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Register = () => {
  const { signUpWithEmail } = useContext(AuthContext);
  const [regError, setRegError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    console.log(name, photo, email, password);

    if (password.length < 6) {
      setRegError("Password must be six characters or longer!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegError("Password must contain at least one capital letter!");
      return;
    } else if (!/[!@#$%^&*]/.test(password)) {
      setRegError("Password must contain at least one special character!");
      return;
    }

    setRegError("");
    // create user
    signUpWithEmail(email, password)
      .then((result) => {
        console.log(result.user);

        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => console.log("Updated name and photo"))
          .catch((error) => {
            console.error(error);
          });

        e.target.reset();
        Swal.fire({
          position: "top-bottom",
          icon: "success",
          title: "You Successfully Register",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setRegError(error.message);
      });

    const user = {
      name: name,
      email: email,
      photo: photo,
      password: password,
    };
    axios
      .post("https://restaurant-management-server-delta.vercel.app/user", user)
      .then((response) => {
        const data = response.data;
        console.log(data);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Foodie Feast | Register</title>
      </Helmet>
      <section className=" bg-base-100 py-16 mt-8">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-5 my-10">
          <div className="grid grid-cols-1 md:items-stretch md:grid-cols-1 md: lg:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
            <div className="flex flex-col justify-between lg:py-8">
              <div>
                <h2 className="text-3xl font-bold leading-tight  sm:text-4xl lg:leading-tight lg:text-5xl">
                  It’s time to join{" "}
                  <span className="text-amber-500">Foodie Feast!</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed ">
                  Ready to embark on a mouthwatering adventure? Sign up for
                  Foodie Feast and become part of a vibrant food community.{" "}
                </p>
              </div>

              <div className="hidden md:mt-auto md:block">
                <img
                  className="rounded-md"
                  src="https://i.postimg.cc/PrzCmj0b/Food-Feast.png"
                  alt=""
                />
                <blockquote className="mt-20">
                  <p className="text-lg leading-relaxed ">
                    Discover extraordinary recipes, share your culinary
                    creations, and connect with fellow food lovers. Your
                    gastronomic journey starts here
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="lg:pl-12">
              <div className="overflow-hidden bg-base-200  rounded-md">
                <div className="p-6 sm:p-10">
                  <h3 className="text-3xl font-semibold text-black">
                    Sign Up in{" "}
                    <span className="text-amber-500">Foddie Feast!</span>
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    Already have an account?{" "}
                    <Link to={"/login"}>
                      <span className="font-medium text-amber-500 transition-all duration-200 hover:text-amber-700 hover:underline focus:text-amber-700">
                        Sign In
                      </span>
                    </Link>
                  </p>
                  <form onSubmit={handleRegister} className="mt-4">
                    <div className="space-y-6">
                      <div>
                        <label className="text-base font-medium text-gray-900">
                          {" "}
                          Your name{" "}
                        </label>
                        <div className="mt-2.5 relative">
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Enter your full name"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 caret-amber-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-base font-medium text-gray-900">
                          {" "}
                          Your PhotoURL{" "}
                        </label>
                        <div className="mt-2.5 relative">
                          <input
                            type="text"
                            name="photo"
                            required
                            placeholder="Enter your photoURL"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 caret-amber-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-base font-medium text-gray-900">
                          {" "}
                          Email address{" "}
                        </label>
                        <div className="mt-2.5 relative">
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="Enter your full name"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 caret-amber-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-base font-medium text-gray-900">
                          {" "}
                          Password{" "}
                        </label>
                        <div className="mt-2.5 relative">
                          <input
                            type="password"
                            name="password"
                            required
                            placeholder="Enter your full name"
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 caret-amber-500"
                          />
                        </div>
                      </div>
                      <div>
                        {regError && (
                          <p className="text-red-600 font-semibold">
                            ⚠️{regError}
                          </p>
                        )}
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="inline-flex items-center text-white justify-center w-full px-4 py-4 text-base font-semibold  transition-all duration-200 bg-amber-500 border border-transparent rounded-md focus:outline-none hover:bg-amber-600 focus:bg-amber-600"
                        >
                          Create Free Account
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="max-w-xs mx-auto mt-5 text-sm text-center text-gray-600">
                    This site is protected by reCAPTCHA and the Google{" "}
                    <a
                      href="#"
                      title=""
                      className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                    >
                      Privacy Policy
                    </a>{" "}
                    &
                    <a
                      href="#"
                      title=""
                      className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                    >
                      Terms of Service
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="md:hidden">
              <blockquote className="mt-6">
                <p className="text-lg leading-relaxed ">
                  Discover extraordinary recipes, share your culinary creations,
                  and connect with fellow food lovers. Your gastronomic journey
                  starts here
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
