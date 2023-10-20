import React from "react";
import img1 from "./image/img1.png";
import img2 from "./image/img2.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const signoutfunction = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  const [state, setState] = useState(false);
  const handlebar = () => {
    setState(!state);
  };
  return (
    <div className="w-full h-screen flex justify-center item-center bg-gradient-to-r from-orange-500 from-10% via-yellow-500 via-30% to-yellow-500 to-90% ...">
      <div className="max-w-[1240px] w-full h-full">
        <div className="absolute  w-full h-[80px] text-white  text-xl flex justify-end items-center ">
          <ul className="md:flex hidden ">
            {user && (
              <button
                className="text-white bg-orange-600 w-[140px] h-[50px] rounded-md mt-6"
                onClick={signoutfunction}
              >
                Signout
              </button>
            )}
            <li className="p-4 m-4 rounded-md">Home</li>
            <li className="p-4 m-4 rounded-md">Servise</li>
            <li className="p-4 m-4 rounded-md">Page</li>
            <li className="p-4 m-4 rounded-md">Portfoliyo</li>
            <li className="p-4 m-4 rounded-md">Elements</li>
            <li className="p-4 m-4 rounded-md">Blogs</li>
          </ul>

          {/* <div onClick={handlebar} className="md:hidden z-10">
            {!state ? <FaBars /> : <FaTimes />}
          </div>

          <ul
            className={
              !state
                ? "hidden"
                : " absolute top-0 left-0 w-full h-screen flex flex-col  bg-orange-500  justify-center items-center "
            }
          >
            {user && (
              <button
                className="text-white bg-orange-600 w-[140px] h-[50px] rounded-md mt-6"
                onClick={signoutfunction}
              >
                Signout
              </button>
            )}
            <li className="p-4 m-4 rounded-md">Home</li>
            <li className="p-4 m-4 rounded-md">Servise</li>
            <li className="p-4 m-4 rounded-md">Page</li>
            <li className="p-4 m-4 rounded-md">Portfoliyo</li>
            <li className="p-4 m-4 rounded-md">Elements</li>
            <li className="p-4 m-4 rounded-md">Blogs</li>
          </ul> */}
        </div>
        <div className=" w-full object-cover ">
          <img className=" w-full h-full" src={img1} alt="" />
        </div>
        {/* center div of the main section */}

        <div className="  w-full h-screen  flex ">
          <div className="lg:w-[600px] md:w-[500px] w-[300px]  h-[400px] absolute lg:mt-[-400px] mt-[-400px] lg:ml-[400px] md:ml-[170px]  sm:ml-[200px]">
            <h1 className="lg:text-5xl text-white text-4xl font- lg:ml-[-30px] lg:font-bold ml-4">
              Discover the New Ideas Build your Business
            </h1>
            <h2 className="mt-[30px] md:text-2xl text-orange-800 ml-4">
              Generate maximum return from your business
            </h2>
            <div className="md:flex mt-6 lg:ml-[50px] ml-8">
              <button className="md:w-[200px] w-[200px] h-[60px] p-3 m-3 rounded-md text-xl bg-orange-400 text-white">
                Start Projects
              </button>
              <button className="md:w-[200px]  w-[200px] h-[60px] m-3 rounded-md text-xl  text-white  p-3 hover:bg-yellow-600">
                Watch Our Story
              </button>
            </div>
          </div>

          <div className="  w-[400px] h-[400px] mt-[-400px] ml-[-180px] rotate-2 lg:flex hidden">
            <img
              className="w-[400px] h-[400px]"
              src="https://media.giphy.com/media/lCz0H5EjnBL4DRJrXX/giphy.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
