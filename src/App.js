import React, { useState, useEffect } from "react";
import MbtiResult from "./_views/MbtiResult";
import InputForm from "./_views/InputForm";

function App() {
  const [name, setName] = useState("");
  const [mbti, setMbti] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedMbti = localStorage.getItem("mbti");
    if (storedName && storedMbti) {
      setName(storedName);
      setMbti(storedMbti);
    }
  }, []);

  return (
    <div className="App">
      {name && mbti ? (
        <MbtiResult />
      ) : (
        <InputForm setName={setName} setMbti={setMbti} />
      )}
    </div>
  );
}

export default App;
