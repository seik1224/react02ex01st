import React from "react";
import MbtiProfile from "./MbtiProfile";

function MbtiResult() {
  return (
    <div className="text-center">
      <div className="flex flex-col justify-center items-center relative z-10">
        <>
          <img
            className="w-[200px] bg-blend-darken"
            src="/images/entj.jpg"
            alt="mbti이미지"
          />
          <h2
            className="text-2xl font-bold mb-4 px-6 py-2 -mt-10 rounded-full border-[6px] bg-white box-border"
            style={{ borderColor: "black", color: "black" }}
          >
            이름
          </h2>
        </>
      </div>

      <MbtiProfile />
    </div>
  );
}

export default MbtiResult;
