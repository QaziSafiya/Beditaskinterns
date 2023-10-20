import React from "react";
import {
  BsGlobeAmericas,
  BsFillPersonLinesFill,
  BsFillBagCheckFill,
} from "react-icons/bs";
import { GiTrophiesShelf } from "react-icons/gi";
const Services = () => {
  return (
    <div className="w-full h-full flex justify-center items-center mt-[120px]  ">
      <div className=" max-w-[1240px] w-full h-full  m-auto ">
        <div className="  lg:w-[700px] md:w-[600px] sm:w-[600px] h-[200px] w-[300px] lg:text-4xl text-3xl    lg:ml-[320px]  md:ml-[100px] ml-[20px] m-auto ">
          <h1 className="text-black font-bold">
            Maximize your visibility , Services We Make{" "}
          </h1>
          <h2 className="mt-6 text-black font-bold">
            with{" "}
            <span className="text-orange-600 font-bold">
              knowledge & passion
            </span>{" "}
          </h2>
          <p className="text-[18px] mt-6 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos adipisci vero ipsa, explicabo, dolorem ipsam eligendi
            Reprehenderit, unde officiis!
          </p>
        </div>

        <div className="  lg:w-full h-[300px] md:w-[650px] w-[300px] grid  lg:grid-cols-4 md:grid-cols-2   grid-cols-1 lg:mt-[80px] lg:ml-[2px] md:ml-[90px] ml-[20px] sm:ml-[180px] sm:mt-10 mt-[250px] ">
          <div className="lg:w-[250px] h-[200px] rounded-md bg-purple-200 m-6">
            <div className="text-purple-800 w-full  mt-8">
              {" "}
              <BsGlobeAmericas size={50} className="ml-[90px]" />
            </div>
            <div className="mt-3 w-full ml-[50px]  ">
              <p className="text-xl">National Top 50</p>
              <p className="text-xl">Consulting Firms</p>
            </div>
          </div>
          <div className="lg:w-[250px] h-[200px] rounded-md bg-green-200 m-6">
            <div className="text-green-400 w-full  mt-8">
              {" "}
              <BsFillPersonLinesFill size={50} className="ml-[90px]" />
            </div>
            <div className="mt-3 w-full ml-[60px] ">
              <p className="text-xl">99.9% Client</p>
              <p className="text-xl">Satisfaction</p>
            </div>
          </div>
          <div className="lg:w-[250px] h-[200px] rounded-md bg-pink-200 m-6">
            <div className="text-pink-400 w-full  mt-8">
              {" "}
              <BsFillBagCheckFill size={50} className="ml-[90px]" />
            </div>
            <div className="mt-3 w-full ml-[30px] ">
              {" "}
              <p className="text-xl">Over 2,000+ Business</p>
              <p className="text-xl">Cases</p>
            </div>
          </div>
          <div className="lg:w-[250px] h-[200px] rounded-md bg-orange-200 m-6">
            <div className="text-orange-400 w-full  mt-8">
              {" "}
              <GiTrophiesShelf size={50} className="ml-[90px]" />
            </div>
            <div className="mt-3 w-full ml-[50px] ">
              <p className="text-xl">Operated over 500+</p>
              <p className="text-xl">Counteries</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
