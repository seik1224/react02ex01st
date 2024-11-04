import React, { useState } from "react";

function InputForm({ setName, setMbti }) {
  const [inputName, setInputName] = useState("");
  const [selectedMbti, setSelectedMbti] = useState("");

  const mbtiTypes = [
    "ISTJ",
    "ISFJ",
    "INFJ",
    "INTJ",
    "ISTP",
    "ISFP",
    "INFP",
    "INTP",
    "ESTP",
    "ESFP",
    "ENFP",
    "ENTP",
    "ESTJ",
    "ESFJ",
    "ENFJ",
    "ENTJ",
  ];

  const handleSave = () => {
    if (inputName && selectedMbti) {
      localStorage.setItem("name", inputName);
      localStorage.setItem("mbti", selectedMbti);
      setName(inputName);
      setMbti(selectedMbti);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          MBTI로 보는 나의 개발유형
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              이름을 입력해주세요
            </label>
            <input
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="이름 입력"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              MBTI 유형을 선택해주세요
            </label>
            <div className="grid grid-cols-4 gap-2">
              {mbtiTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedMbti(type)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${
                      selectedMbti === type
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleSave}
            disabled={!inputName || !selectedMbti}
            className={`w-full py-3 rounded-lg text-white font-medium transition-colors
              ${
                inputName && selectedMbti
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
          >
            결과 확인하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputForm;
