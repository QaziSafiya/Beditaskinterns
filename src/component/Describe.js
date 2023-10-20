import React from "react";
import test1 from "./image/test1.jpg";
import test2 from "./image/test2.jpg";
import test3 from "./image/test3.jpg";
const Describe = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center lg:mt-[620px] md:mt-[1150px] mt-[1000px] ">
      <div className=" max-w-[1240px] w-full h-full  m-auto ">
        <div className="  lg:w-[700px] md:w-[600px] sm:w-[600px] h-[200px] w-[300px] lg:text-4xl text-3xl    lg:ml-[320px]  md:ml-[100px] ml-[20px] m-auto ">
          <h1 className="text-black font-bold">
            Business Ethics You Can Trust ,
          </h1>
          <h2 className="mt-6 text-black font-bold">
            Create a Unique Website
            <span className="text-orange-600 font-bold">
              For Your Business
            </span>{" "}
          </h2>
          <p className="text-[18px] mt-6 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos adipisci vero ipsa, explicabo, dolorem ipsam eligendi
            Reprehenderit, unde officiis!
          </p>
        </div>

        <div className="lg:w-full lg:h-[500px] h-[1000px] md:w-[650px] w-[300px] grid  lg:grid-cols-3 md:grid-cols-2   grid-cols-1 lg:mt-[80px] lg:ml-[2px] md:ml-[90px] ml-[20px] sm:ml-[180px] sm:mt-10 mt-[250px] ">
          <div className="lg:w-[300px] h-[350px] rounded-md bg-purple-200 m-6 shadow-md">
            <div className="text-purple-800 w-full rounded-md">
              {" "}
              <img src={test2} alt="" />
            </div>
            <div className="mt-3 w-full p-3 ">
              <p className="text-xl">Designing for user interface</p>
              <p className="text-xl">icons visual elements for screen</p>
            </div>
          </div>
          <div className="lg:w-[300px] h-[350px] rounded-md bg-green-200 m-6 shadow-md">
            <div className="text-green-400 w-full rounded-md">
              {" "}
              <img src={test1} alt="" />
            </div>
            <div className="mt-3 w-full p-3 ">
              <p className="text-xl">Designing for user interface</p>
              <p className="text-xl">icons visual elements for screen</p>
            </div>
          </div>
          <div className="lg:w-[300px] h-[350px] rounded-md bg-pink-200 m-6 shadow-md">
            <div className="text-pink-400 w-full rounded-md ">
              <img src={test3} alt="" />{" "}
            </div>
            <div className="mt-3 w-full p-3 ">
              <p className="text-xl">Designing for user interface</p>
              <p className="text-xl">icons visual elements for screen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Describe;
