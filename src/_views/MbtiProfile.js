import React from "react";

function MbtiProfile() {
  const circleStyle = {
    background: `conic-gradient(black ${5 * 3.6}deg, #e0e0e0 0deg)`,
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 transform transition-all border-2 border-[#eee] -mt-12">
        <p className="text-gray-600 mb-6">
          description안의 정보를 가져와주세요.
        </p>

        <div
          className="w-32 h-32 mx-auto rounded-full mb-6 relative flex items-center justify-center"
          style={circleStyle}
        >
          <div className="w-28 h-28 bg-white rounded-full absolute flex items-center justify-center">
            <p className="text-2xl font-bold" style={{ color: "black" }}>
              <span className="text-base">type 비율</span>
              <br />
              5%
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          <span
            style={{ backgroundColor: `#eee` }}
            className="px-4 py-1.5 rounded-full text-sm font-medium"
          >
            tags1
          </span>
          <span
            style={{ backgroundColor: `#eee` }}
            className="px-4 py-1.5 rounded-full text-sm font-medium"
          >
            tags2
          </span>
        </div>
      </div>
      <h2 className="text-[40rem] font-bold text-[#eee] mb-4 absolute top-0 left-1/2 -translate-x-1/2 -z-10">
        type
      </h2>
    </>
  );
}

export default MbtiProfile;
