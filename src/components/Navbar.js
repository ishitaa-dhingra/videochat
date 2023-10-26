import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="h-[4rem] bg-black flex  items-center justify-between">
      {/*Left*/}
      <div className="flex items-center">
        <div classNme="flex w-[0.005rem] h-[0.05rem] bg-white rounded-full">
          <img src={logo} alt="" className="h-[4rem]" />
        </div>
        <div>
          <p className="font-bold text-white">
            Connect from anywhere, anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
