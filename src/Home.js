import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import conference from "../src/assets/conference.jpg";
import Navbar from "./components/Navbar";
const Home = () => {
  const [RoomCode, setRoomCode] = useState("");

  const navigate = useNavigate();

  const submitCode = (e) => {
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
  };

  return (
    <div className="">
      {/*Navbar*/}

      <Navbar />

      {/*Hero*/}
      <div className="relative  h-screen">
        {/*Image*/}
        <div className="absolute h-[34rem] w-full flex overflow-hidden">
          <img src={conference} className="object-cover w-full h-full"></img>
        </div>
        <div className="absolute h-full w-full flex overflow-hidden bg-black/60"></div>
        {/*Hero Info*/}
        <div className="lg:flex flex-col items-center justify-center relative z-10 px-6 md:max-w-[90vw] mx-auto">
          <div classname=" lg:flex flex-col items-center justify-center pb-8">
            <h1 className="  text-[56px] text-white font-bold pt-12">
              Video Chat App
            </h1>
            <p className="text-[26px] text-white  mt-2 lg:flex flex-col items-center justify-center">
              With ZegoCloud
            </p>
          </div>
          <form
            onSubmit={submitCode}
            className=" text-white md:pt-12 lg:flex flex-col items-center justify-center"
          >
            <div className=" flex flex-col lg:items-center justify-center ">
              <label className=" text-[30px] md:text-[40px] font-bold pt-6 ">
                Enter the Room Code
              </label>
              <br />
              <input
                type="text"
                required
                placeholder="Enter Room Code"
                value={RoomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                className="py-1.5 px-4 rounded-full max-w-[14rem] mt-2 text-blue-500 pt-15"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 duration-100 ease-out font-bold w-[5rem] md:w-[7rem] rounded-full py-[5px] md:py-[7px] mt-2 md:mt-4"
            >
              Enter Room
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Home;
