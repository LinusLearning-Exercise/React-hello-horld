import React from "react";
import useRate from "./useRate.js";
import useRWD from "./useRWD";

const Cheer = (props) => {
  const score = useRate(props.value);
  const device = useRWD();
  let deviceEle;

  if (device === "PC") deviceEle = <h1 style={{ color: "#354458", fontFamily: "Microsoft JhengHei" }}>電腦</h1>;
  else if (device === "tablet") deviceEle = <h1 style={{ color: "#3a9ad9", fontFamily: "Microsoft JhengHei" }}>平板</h1>;
  else deviceEle = <h1 style={{ color: "#29aba4", fontFamily: "Microsoft JhengHei" }}>手機</h1>;

  return (
    <div>
      <h1>美心加油器</h1>
      <div>
        目前分數{props.value}
        <br />
        還有沒有! 再來{88 - score}分!
      </div>
      <button value={Number(props.value) + 1} onClick={props.onClick}>
        加1分
      </button>
      <button value={Number(props.value) + 7} onClick={props.onClick}>
        加7分
      </button>
      <button value={Number(props.value) + 10} onClick={props.onClick}>
        加10分
      </button>
      <button value={0} onClick={props.onClick}>
        0分
      </button>
      <hr />
      {deviceEle}
    </div>
  );
};

export default Cheer;
