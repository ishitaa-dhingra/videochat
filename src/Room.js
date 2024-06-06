import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
const Room = () => {
  const { roomID } = useParams();
  let meeting = async (element) => {
    const appID = 2032128404;
    const serverSecret = "9be98ee2bf829ccfc88cdfcfdf33fa3a";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "ishitaa"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };
  return (
    <div ref={meeting} style={{ width: "100vw", height: "100vh" }}>
      Room
    </div>
  );
};
export default Room;
