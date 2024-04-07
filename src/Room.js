import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
const Room = () => {
  const { roomID } = useParams();
  let meeting = async (element) => {
    const appID = 329639491;
    const serverSecret = "95e8fd9d8eae26cfd439cb0b4c2d48c7";

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
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
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
