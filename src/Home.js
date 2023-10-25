import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
      <div className="h-[5rem] bg-black"></div>
      {/*Hero*/}

      <div>
        <form
          onSubmit={submitCode}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center">
            <label>Enter the Room Code</label>
            <br />
            <input
              type="text"
              required
              placeholder="Enter Room Code"
              value={RoomCode}
              onChange={(e) => setRoomCode(e.target.value)}
            />

            <button
              type="submit"
              className="bg-orange-500 rounded-[0.5rem] mt-4 py-1.5 px-4 font-bold"
            >
              Enter Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Home;
