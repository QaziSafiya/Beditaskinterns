import React from "react";
import employ from "./image/employ.png";
import { GrNotes } from "react-icons/gr";
const Startup = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center lg:mt-[200px] mt-[1100px] md:mt-[600px]">
      <div className="max-w-[1240px] w-full h-full ">
        <div className=" w-full h-full grid lg:grid-cols-2   grid-cols-1 gap-6  ">
          <div className="lg:w-[800px] md:w-[400px] md:h-[760px] lg:h-[500px] w-[300px]  mt-[80px] p-4  md:ml-[170px] sm:ml-[200px] ml-[20px]  ">
            <h1 className="text-4xl font-bold lg:ml-[-200px]">
              We Love To Help Build Your Perfect
            </h1>
            <h1 className="text-orange-400 text-4xl font-bold mt-4 lg:ml-[-200px]">
              Startup Business
            </h1>
            <p className="text-xl text-gray-500 mt-9 lg:ml-[-200px]">
              Lorem ipsum dolor sit amet atque non perspiciatis labore
              blanditiis excepturi.
            </p>

            <div className="lg:w-[400px]  lg:ml-[10px] ">
              <ul className="mt-[50px] text-gray-700">
                <p className=" text-gray-600 lg:ml-[-200px]  ">
                  There are many passages and variations of Lorem ipsum dolor
                  sit amet consectetur. consectetur
                </p>
                <button className="w-[200px]  bg-orange-400 mt-8 rounded-md h-[50px] lg:ml-[-200px]">
                  Free Consultation
                </button>

                <hr className="mt-9 font-bold text-orange-600 h-3" />
                <div className="flex lg:w-[600px] lg:ml-[-200px] ">
                  <GrNotes size={60} className="ml-2 text-orange-600 " />

                  <p className="ml-6">
                    Adipisci voluptas doloribus, perspiciatis corporis
                    architecto dignissimos officiis? Laborum doloribus
                    perferendis quam odio rem dolorem accusamus officiis!
                  </p>
                </div>
              </ul>
            </div>
          </div>
          <div className="lg:w-[500px] lg:h-[400px] w-[300px] h-[300px]  md:mt-[-80px] mt-[90px] ml-8 md:w-[400px] sm:ml-[200px]  p-4 lg:ml-[200px] lg:mt-[200px]">
            <img
              className="lg:w-[500px] lg:h-[400px] md:w-[400px]  w-[300px] h-[300px]  "
              src={employ}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startup;
