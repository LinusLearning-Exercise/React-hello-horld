import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

const SecondPage = () => {
  const StyleSheet = {
    backgroundColor: "#08D9D6"
  };
  return (
    <div className="Layout" style={StyleSheet}>
      <nav>
        <Link to="/">點我連到第一頁</Link>
        <Link to="/about" style={{ marginLeft: "20px" }}>
          點我連到第二頁
        </Link>
      </nav>
      <h1 style={{ color: "white", fontFamily: "Microsoft JhengHei" }}>我是第二頁</h1>
    </div>
  );
};

export default SecondPage;
