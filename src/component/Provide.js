import React from "react";
import img12 from "./image/img12.jpg";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import { GiTeamIdea } from "react-icons/gi";
const Provide = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center md:mt-[200px] lg:mt-[-180px]  mt-[400px]">
      <div className="max-w-[1240px] w-full h-full ">
        <div className="  lg:w-[700px] md:w-[600px] sm:w-[600px] h-[200px] w-[300px] lg:text-4xl text-3xl    lg:ml-[320px]  md:ml-[100px] ml-[20px] m-auto md:mt-[300px] mt-[80px] ">
          <h1 className="text-black font-bold">We Provide Better Service</h1>
          <h2 className="mt-6 text-orange-600 font-bold">For your business</h2>
          <p className="text-[18px] mt-6 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos adipisci vero ipsa, explicabo, dolorem ipsam eligendi
            Reprehenderit, unde officiis!
          </p>
        </div>

        <div className=" w-full h-full grid lg:grid-cols-2  grid-cols-1  gap-6 md:ml ">
          <div className="lg:w-[500px] md:w-[400px] h-[500px]  lg:mt-[80px] md:mt-[120px] mt-[200px] md:ml-[200px] lg:ml-8 w-[300px] sm:ml-[200px] sm:mt-[40px]  p-4">
            <img
              className="lg:w-[500px] md:w-[400px]   w-[400px] h-[300px]  lg:h-full"
              src={img12}
              alt=""
            />
          </div>

          <div className="lg:w-[500px] md:w-[350px] h-[500px] w-[300px]  lg:mt-[80px] mt-[-160px] p-4 lg:ml-5 md:ml-[450px] ml-[20px] sm:ml-[200px]">
            <div className="lg:w-[600px]  lg:ml-[-90px]  md:ml-[-200px] md:w-[350px]">
              <ul className="mt-[50px] text-gray-700 ">
                <div className="lg:w-[500px] md:w-[340px] w-[300px] lg:h-[160px] h-[180px]  shadow-lg bg-white rounded-md lg:ml-[-60px] mt-6  ml-[-20px]">
                  <div className="flex ">
                    <div className="ml-6 mt-7">
                      <p className="m-auto w-[80px] h-[80px] rounded-full text-purple-700  bg-purple-300 flex justify-center item center ">
                        <AiOutlineDollarCircle size={40} className="mt-5" />
                      </p>
                    </div>
                    <div className="w-[300px] ml-3 mt-3">
                      <h3 className="text-2xl mt-6 font-bold">
                        Accounting and Finance
                      </h3>
                      <p className=" text-gray-600 m-auto">
                        Lorem ipsum dolor sit amet consectetur. consectetur
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[500px] md:w-[340px] w-[300px] lg:h-[160px] h-[180px]  roundes-md shadow-lg bg-white rounded-md  lg:ml-[30px] mt-6 ml-[-20px]">
                  <div className="flex">
                    <div className="ml-6 mt-7">
                      <p className="m-auto w-[80px] h-[80px] rounded-full text-green-600 bg-green-300 flex justify-center item center  ">
                        <BsGraphUpArrow size={30} className=" mt-5" />
                      </p>
                    </div>
                    <div className="w-[300px] ml-3 mt-3">
                      <h3 className="text-2xl mt-6 font-bold">
                        Markiting Research
                      </h3>
                      <p className=" text-gray-600 m-auto">
                        Lorem ipsum dolor sit amet consectetur. consectetur
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[500px] md:w-[340px] w-[300px] lg:h-[160px] h-[180px]  roundes-md shadow-lg bg-white rounded-md  lg:ml-[-60px] mt-6 ml-[-20px]">
                  <div className="flex">
                    <div className="ml-6 mt-7">
                      <p className="m-auto w-[80px] h-[80px] rounded-full text-pink-500 bg-pink-300 flex justify-center item center ">
                        <GiTeamIdea size={40} className=" mt-5" />
                      </p>
                    </div>
                    <div className="w-[300px] ml-3 mt-3">
                      <h3 className="text-2xl mt-6 font-bold">
                        Business Consulting
                      </h3>
                      <p className=" text-gray-600 m-auto">
                        Lorem ipsum dolor sit amet consectetur. consectetur
                      </p>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
