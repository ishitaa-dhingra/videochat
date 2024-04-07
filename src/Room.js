import React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
const Room = () => {
  const { roomID } = useParams();
  let meeting = async (element) => {
    const appID = 199756061;
    const serverSecret = "25bb2ffa0e59a422f37cfb4af44e94f9";

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
