import React from "react";
import Empower from "./Empower";
import Thumb3 from "/img/facebook-thumb.png";
import facebook from "/img/facebook.png";
import { Link, Outlet } from "react-router-dom";

export default function Benefits() {
  return (
    <div className="">
      <Empower />

      <div className="flex mt-5 mb-16">
        <div className="w-[65%] ml-16 mr-16">
          <div className="border-b-2 flex px text-lg">
            <nav className="bg-red-800 w-fit text-white px-4 py-2">
              <Link
                className=" mr-4 hover:text-cyan-500 transition-colors duration-300"
                to="benefit1"
              >
                Benefits of Senior Citizens
              </Link>
            </nav>
          </div>
          <div className="mt-4">
            <Outlet />
          </div>
        </div>
        <div className="w-[30%] mr-32">
          <div className="bg-white p-4 m-2">
            <div className="text-xl font-bold bg-gray-200 py-2 px-2 flex ">
              <img src={facebook} alt="Logo" className="w-8 mr-2" />
              <h2>FOLLOW US ON FACEBOOK</h2>
            </div>
            <a
              href="https://www.youtube.com/watch?v=1bkSjy2IQ2M"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Thumb3} alt="Video 2" className="w-full h-auto mb-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
