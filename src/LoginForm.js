import React, { useState, useEffect } from "react";

const LoginForm = () => {
  const [account, setAccount] = useState("快來輸入我");
  const [nowSelect, setNowSelect] = useState("789");
  const [isCheck, setIsCheck] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAccount("用fetch拿到的資料");
    }, 2000);
  }, []);

  return (
    <div>
      <input
        type="text"
        value={account}
        onChange={(e) => {
          setAccount(e.target.value);
        }}
      />
      <div>目前account:{account}</div>
      <textarea
        value={account}
        onChange={(e) => {
          setAccount(e.target.value);
        }}
      ></textarea>
      <br />
      <button
        onClick={() => {
          setAccount("");
        }}
      >
        用按鍵取得新的account
      </button>
      <br />
      <select
        value={nowSelect}
        onChange={(e) => {
          setNowSelect(e.target.value);
        }}
      >
        <option value="123">123</option>
        <option value="456" selected>
          456
        </option>
      </select>
      <br />
      <input
        type="radio"
        value="123"
        checked={nowSelect === "123"}
        onChange={(e) => {
          setNowSelect("123");
        }}
      />
      123
      <br />
      <input
        type="radio"
        value="456"
        checked={nowSelect === "456"}
        onChange={(e) => {
          setNowSelect("456");
        }}
      />
      456
    </div>
  );
};

export default LoginForm;
