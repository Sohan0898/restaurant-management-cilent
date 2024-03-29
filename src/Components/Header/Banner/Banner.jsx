import {
  PiArrowFatLineLeftFill,
  PiArrowFatLineRightFill,
} from "react-icons/pi";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      {/* slider */}

      <div className="carousel w-full h-[80vh] md:h-[100vh]">
        <div id="slide1" className="carousel-item relative w-full">
          {/* hero */}
          <div className="hero bg-cover bg-[url(https://i.postimg.cc/KvdM5fYF/1-20231105-214225-0000.png)]">
            <div className="hero-overlay bg-opacity-10 bg-gradient-to-r from-[#000000] to-[#12121200]"></div>
            <div className="hero-content pl-6 md:pl-12 lg:pl-0 text-start text-neutral-content">
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="space-y-5"
              >
                <div className="flex justify-start  items-center mt-20 md:mt-0 gap-4">
                  <progress
                    className="progress progress-warning w-9"
                    value="100"
                    max="100"
                  ></progress>
                  <h3 className="font-montserrat font-medium  text-gray-300 ">
                    Welcome To
                  </h3>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-paytone">
                  <span className="text-red-500">Foodie Feast</span> |<br />{" "}
                  Savor Every <br /> Bite
                </h1>
                <p className="font-montserrat text-xs  md:text-base text-gray-300 w-2/3 md:w-2/3    lg:w-3/6">
                  A culinary journey awaits you at Foodie Feast. Immerse
                  yourself in a symphony of flavors, prepared with passion and
                  creativity.
                </p>
                <br />
                <Link to={"/ourMenu"}>
                  <button className="btn bg-amber-500 border-none capitalize rounded-md font-montserrat">
                    View Our Menu
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 gap-3 right-10 bottom-3">
            <a
              href="#slide4"
              className="text-4xl hover:text-gray-200 text-white"
            >
              <PiArrowFatLineLeftFill></PiArrowFatLineLeftFill>
            </a>
            <a
              href="#slide2"
              className="text-4xl text-white hover:text-gray-200"
            >
              <PiArrowFatLineRightFill></PiArrowFatLineRightFill>
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          {/* hero */}
          <div className="hero   bg-cover   bg-[url(https://i.postimg.cc/tgdWJ6pb/3-20231105-214225-0002.png)]">
            <div className="hero-overlay bg-opacity-10 bg-gradient-to-r from-[#000000] to-[#12121200]"></div>
            <div className="hero-content pl-6 md:pl-12 lg:pl-0 text-start text-neutral-content">
              <div className="space-y-5">
                <div className="flex justify-start  items-center mt-20 md:mt-0 gap-4">
                  <progress
                    className="progress progress-warning w-9"
                    value="100"
                    max="100"
                  ></progress>
                  <h3 className="font-montserrat font-medium text-gray-300 ">
                    Welcome To
                  </h3>
                </div>
                <h1 className=" text-3xl md:text-5xl lg:text-6xl text-white font-paytone">
                  <span className="text-red-500">Foodie Feast</span> |<br />{" "}
                  Nourish Your <br /> Day
                </h1>
                <p className="font-montserrat text-xs  md:text-base text-gray-300 w-2/3 md:w-2/3    lg:w-3/6">
                  Start your day right with our wholesome, healthy breakfast
                  options. Fuel your body with natural goodness.
                </p>
                <br />
                <Link to={"/ourMenu"}>
                  <button className="btn bg-amber-500 border-none capitalize rounded-md font-montserrat">
                    See Breakfast Choices
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 gap-3 right-10 bottom-3">
            <a
              href="#slide1"
              className="text-4xl hover:text-gray-200 text-white"
            >
              <PiArrowFatLineLeftFill></PiArrowFatLineLeftFill>
            </a>
            <a
              href="#slide3"
              className="text-4xl text-white hover:text-gray-200"
            >
              <PiArrowFatLineRightFill></PiArrowFatLineRightFill>
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          {/* hero */}
          <div className="hero  bg-cover   bg-[url(https://i.postimg.cc/zfkH81FX/2-20231105-214225-0001.png)]">
            <div className="hero-overlay bg-opacity-10 bg-gradient-to-r from-[#000000] to-[#12121200]"></div>
            <div className="hero-content pl-6 md:pl-12 lg:pl-0 text-start text-neutral-content">
              <div className="space-y-5">
                <div className="flex justify-start  items-center mt-20 md:mt-0 gap-4">
                  <progress
                    className="progress progress-warning w-9"
                    value="100"
                    max="100"
                  ></progress>
                  <h3 className="font-montserrat font-medium text-gray-300 ">
                    Welcome To
                  </h3>
                </div>
                <h1 className=" text-3xl md:text-5xl lg:text-6xl text-white font-paytone">
                  <span className="text-red-500">Foodie Feast</span> |<br />{" "}
                  Culinary Bliss <br /> Awaits
                </h1>
                <p className="font-montserrat text-xs  md:text-base text-gray-300 w-2/3 md:w-2/3    lg:w-3/6">
                  Indulge your senses at Foodie Feast, where every dish is a
                  masterpiece. Unwind, dine, and savor the blissful taste of
                  excellence.
                </p>
                <br />
                <Link to={"/ourMenu"}>
                  <button className="btn bg-amber-500 border-none capitalize rounded-md font-montserrat">
                    View Our Specials
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 gap-3 right-10 bottom-3">
            <a
              href="#slide2"
              className="text-4xl hover:text-gray-200 text-white"
            >
              <PiArrowFatLineLeftFill></PiArrowFatLineLeftFill>
            </a>
            <a
              href="#slide4"
              className="text-4xl text-white hover:text-gray-200"
            >
              <PiArrowFatLineRightFill></PiArrowFatLineRightFill>
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          {/* hero */}
          <div className="hero  bg-cover   bg-[url(https://i.postimg.cc/V6LrNHK9/4-20231105-214225-0003.png)]">
            <div className="hero-overlay bg-opacity-10 bg-gradient-to-r from-[#000000] to-[#12121200]"></div>
            <div className="hero-content pl-6 md:pl-12 lg:pl-0 text-start text-neutral-content">
              <div className="space-y-5">
                <div className="flex justify-start  items-center mt-20 md:mt-0 gap-4">
                  <progress
                    className="progress progress-warning w-9"
                    value="100"
                    max="100"
                  ></progress>
                  <h3 className="font-montserrat font-medium text-gray-300 ">
                    Welcome To
                  </h3>
                </div>
                <h1 className="  text-3xl md:text-5xl lg:text-6xl text-white font-paytone">
                  <span className="text-red-500">Foodie Feast</span> |<br />{" "}
                  Feast for the <br /> Senses
                </h1>
                <p className="font-montserrat text-xs  md:text-base text-gray-300 w-2/3 md:w-2/3    lg:w-3/6">
                  Join us at Foodie Feast for a feast that tantalizes your taste
                  buds and captivates your senses. Experience culinary artistry
                  like never before.
                </p>
                <br />
                <Link to={"/ourMenu"}>
                  <button className="btn bg-amber-500 border-none capitalize rounded-md font-montserrat">
                    Explore Our Flavors
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 gap-3 right-10 bottom-3">
            <a
              href="#slide3"
              className="text-4xl hover:text-gray-200 text-white"
            >
              <PiArrowFatLineLeftFill></PiArrowFatLineLeftFill>
            </a>
            <a
              href="#slide1"
              className="text-4xl text-white hover:text-gray-200"
            >
              <PiArrowFatLineRightFill></PiArrowFatLineRightFill>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
