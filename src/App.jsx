import { useRecoilState } from "recoil";
import "./App.css";
import React, { useState } from "react";
import { cntState } from "./cntState";
function Cnt({}) {
  //변경할 것을 RecoilState로 선언
  const [cnt, setCnt] = useRecoilState(cntState);

  return (
    <div>
      <h1>Count</h1>
      <button
        onClick={() => {
          setCnt((prev) => prev + 1);
        }}
      >
        +
      </button>
      {cnt}
    </div>
  );
}

function DisplayCnt() {
  //변경된 값을 보여줄 것을 RecoilState로 선언
  const [cnt] = useRecoilState(cntState);
  return <div>{cnt}</div>;
}

function App() {
  return (
    <div>
      <Cnt />
      <DisplayCnt />
    </div>
  );
}

export default App;
