import { PlayCircle } from "@styled-icons/ionicons-outline";

import heroImage from "../assets/img/main-plate.png";
import dishOne from "../assets/img/dishOne.png";
import dishTwo from "../assets/img/dishTwo.png";
import dishThree from "../assets/img/dishThree.png";
const Hero = () => {
  return (
    <div className="relative">
      <img src={dishOne} alt="dish" className="dishOne" />
      <img src={dishTwo} alt="dish" className="dishTwo" />
      <img src={dishThree} alt="dish" className="dishThree" />
      <div className="container mx-auto grid grid-cols-1 gap-5 lg:grid-cols-10 items-center py-[10vh]">
        <div className="col-span-1 md:col-span-6 px-4  lg:bg-gray-400 lg:rounded-md lg:bg-clip-padding lg:backdrop-filter lg:backdrop-blur-sm lg:bg-opacity-10 lg:border lg:border-gray-100">
          <h1 className="text-4xl text-center lg:text-start md:text-[50px] md:leading-[55px] my-5 uppercase font-bold">
            The Number <span className="text-red-600">#One</span> <br />
            Choise your <br />
            <span className="text-red-600">Hunger Solution</span>
          </h1>
          <p className="font-semibold text-center lg:text-start lg:w-5/6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            provident deleniti ducimus explicabo aperiam aut aliquam magnam
            error!
          </p>
          <div className="flex flex-col items-center justify-center md:flex-row lg:justify-start gap-4  mt-5">
            <div className="my-3">
              <a
                href="#"
                className="font-medium px-12 py-4 bg-red-600 rounded-3xl  text-white "
              >
                Order Now
              </a>
            </div>

            <div className="my-3">
              <a href="#">
                <PlayCircle className="h-14 w-14 text-red-600" />
                <span> How to order</span>
              </a>
            </div>
          </div>
        </div>
        <div className=" col-span-1 md:col-span-4">
          <img
            src={heroImage}
            className=" w-[80%] lg:w-[100%] mx-auto shadow-lg rounded-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
