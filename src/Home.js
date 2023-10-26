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
      <div>
        <Navbar />
      </div>
      {/*Hero*/}
      <div className="relative ">
        {/*Image*/}
        <div className=" absolute h-[34rem] w-full flex overflow-hidden">
          <img src={conference} className="object-cover w-full h-full"></img>
        </div>
        {/*Hero Info*/}
        <div className="relative z-10 px-6">
          <div classname="pb-8">
            <h1 className="text-[56px] text-white font-bold pt-4">
              Video Chat App
            </h1>
          </div>
          <form onSubmit={submitCode} className=" text-white">
            <div className="flex flex-col  justify-center">
              <label className="text-[25px] font-bold text-blue-500">
                Enter the Room Code
              </label>
              <br />
              <input
                type="text"
                required
                placeholder="Enter Room Code"
                value={RoomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                className="py-1.5 px-4 rounded-full max-w-[14rem] mt-2 text-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500  w-[8rem] rounded-[0.5rem] mt-2 py-1.5 font-bold"
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
