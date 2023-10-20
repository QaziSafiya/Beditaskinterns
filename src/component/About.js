import React from "react";
import employ from "./image/employ.png";
import { BiChevronRightCircle } from "react-icons/bi";
const About = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center md:mt-[200px] lg:mt-[40px]  mt-[700px]">
      <div className="max-w-[1240px] w-full h-full ">
        <div className=" w-full h-full grid lg:grid-cols-2   grid-cols-1 gap-6 md:ml ">
          <div className="lg:w-[600px] md:w-[400px] h-[500px] w-[300px]  mt-[80px] p-4 lg:ml-5 md:ml-[170px] sm:ml-[200px] ml-[20px] ">
            <h1 className="text-4xl font-bold">Make Your Business More</h1>
            <h1 className="text-orange-400 text-4xl font-bold mt-4">
              Compettitive and Suatainable
            </h1>
            <p className="text-xl text-gray-500 mt-9">
              Lorem ipsum dolor sit amet atque non perspiciatis labore
              blanditiis excepturi.
            </p>

            <div className="lg:w-[400px]  lg:ml-[90px]">
              <ul className="mt-[50px] text-gray-700">
                <li className="mt-8 text-xl flex">
                  <BiChevronRightCircle
                    size={30}
                    className=" text-orange-500 ml-[-20px]"
                  />
                  <p className=" text-gray-600">
                    Lorem ipsum dolor sit amet consectetur. consectetur
                  </p>
                </li>
                <li className="mt-8 text-xl flex">
                  <BiChevronRightCircle
                    size={30}
                    className=" text-orange-500 ml-[-20px] "
                  />
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur. consectetur
                  </p>
                </li>
                <li className="mt-8 text-xl flex">
                  <BiChevronRightCircle
                    size={30}
                    className=" text-orange-500 ml-[-20px]"
                  />
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur. consectetur
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-[500px] w-[300px] h-[500px]  mt-[80px] ml-8 md:w-[400px] sm:ml-[200px]  p-4 lg:ml-[-20px]">
            <img
              className="lg:w-[500px] md:w-[400px]  w-[300px] h-[300px]  lg:h-full"
              src={employ}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
