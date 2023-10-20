import React from "react";
import { IoMdAdd } from "react-icons/io";
const Customer = () => {
  return (
    <div className="w-full h-full flex justify-center items-center lg:mt-[120px] md:mt-[600px] sm:mt-[700px] mt-[800px] ">
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
          <div className="lg:w-[250px] h-[300px] rounded-md bg-purple-200 m-6">
            <div className="text-purple-800 w-[50px] h-[50px] rounded-full bg-purple-300 mt-8 ml-[90px]">
              {" "}
              <IoMdAdd size={50} className="" />
            </div>
            <div className=" w-full mt-8 ">
              <p className="text-2xl font-bold ml-4">Innovative Ideas</p>
              <p className="text-[18px] m-3">
                Consulting Firms Lorem ipsum dolor sit amet.m ipsum dolor sit
                amet.
              </p>
            </div>
          </div>
          <div className="lg:w-[250px] h-[300px] rounded-md bg-green-200 m-6">
            <div className="text-green-400  w-[50px] h-[50px] rounded-full bg-green-300  mt-8 ml-[90px]">
              {" "}
              <IoMdAdd size={50} className="" />
            </div>
            <div className="mt-8 w-full ">
              <p className="text-2xl font-bold ml-3">Customer Assistance</p>
              <p className="text-[18px] m-4">
                Satisfaction Lorem ipsum dolor sit amet.m ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="lg:w-[250px] h-[300px] rounded-md bg-pink-200 m-6 ">
            <div className="text-pink-400 w-[50px] h-[50px] rounded-full bg-pink-300  mt-8 ml-[90px]">
              <IoMdAdd size={50} className="" />
            </div>
            <div className="mt-8 w-full ml-4 ">
              <p className="text-2xl font-bold">Global Presence</p>
              <p className="text-[18px] m-3">
                Satisfaction Lorem ipsum dolor sit amet.m ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="lg:w-[250px] h-[300px] rounded-md bg-orange-200 m-6">
            <div className="text-orange-400 w-[50px] h-[50px] rounded-full bg-orange-300  mt-8 ml-[90px]">
              {" "}
              <IoMdAdd size={50} className="" />
            </div>
            <div className="mt-8 w-full ml-4">
              <p className="text-2xl font-bold">Affordable prices</p>
              <p className="text-[18px] m-2  ">
                Satisfaction Lorem ipsum dolor sit . ipsum dolor sit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
