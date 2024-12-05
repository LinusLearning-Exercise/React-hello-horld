import React, { useState } from "react";
import Percent from "./Percent";
import Cheer from "./Cheer";

const AppFunc = () => {
  const [value, setValue] = useState(10);
  const [score, setScore] = useState(0);
  return (
    <div>
      <Percent
        value={value}
        onClick={(e) => {
          setValue(e.target.value);
        }}
      />
      <Cheer
        value={score}
        onClick={(e) => {
          setScore(e.target.value);
        }}
      />
    </div>
  );
};
export default AppFunc;
