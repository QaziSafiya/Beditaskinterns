import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs";
import cloud from "./image/cloud.jpg";
const Footer = () => {
  return (
    <div className="w-full h-full flex justify-center item-center bg-gradient-to-r from-orange-500 from-10% via-yellow-600 via-30% to-yellow-400 to-90% lg:mt-[200px] mt-[1200px]">
      <div className="max-w-[1240px]  text-white   ">
        <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 ">
          <div className="w-[300px] h-[300px] p-4 m-5">
            <h1 className="text-3xl font-bold ">About us</h1>
            <p className="mt-5">
              There are many variations Lorem ipsum consectetur totam quae nemo
              iste quos voluptatem ut soluta debitis dolorum, voluptatibus id
              architecto quas magni temporibus? Hic.
            </p>
            <h1 className="font-bold text-3xl mt-8 ">RYSE</h1>
          </div>
          <div className="w-[200px] h-[300px] p-4 m-5">
            <h1 className="text-xl font-bold">Important Links</h1>
            <ul className="mt-5">
              <li className="mt-3">About us</li>
              <li className="mt-3">Service</li>
              <li className="mt-3">Contact</li>
              <li className="mt-3">Projects</li>
              <li className="mt-3">Case studies</li>
            </ul>
          </div>
          <div className="w-[200px] h-[300px] p-4 m-5 ">
            <h1 className="text-xl font-bold">Featured</h1>
            <ul className="mt-5">
              <li className="mt-3">Search engine optimization</li>
              <li className="mt-3">Link building</li>
              <li className="mt-3">Keyword Training</li>
              <li className="mt-3">Web analytics</li>
              <li className="mt-3">Email Markiting</li>
            </ul>
          </div>
          <div className="w-[260px] h-[340px] p-4 m-5 ">
            <h1 className="text-xl font-bold">Contact us</h1>
            <ul className="mt-5">
              <li className="mt-3 text-orange-800 font-bold">Office address</li>
              <li className="mt-3">
                1500 Northwest freeway, Suite 206 Hosten Taxes77092
              </li>

              <li className="mt-3 text-orange-800 font-bold">
                Phone- 6396139911
              </li>
              <li className="mt-3 text-orange-800 font-bold ">
                Email - siddiquisafiya69@gmail.com
              </li>

              <div className="flex mt-5 ">
                <li className="m-3">
                  <BsInstagram size={30} />
                </li>
                <li className="m-3">
                  <BsLinkedin size={30} />
                </li>
                <li className="m-3">
                  <BsTwitter size={30} />
                </li>
                <li className="m-3">
                  <BsWhatsapp size={30} />
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
