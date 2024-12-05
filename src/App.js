import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Parent from "./Parent";

class App extends Component {
  constructor(props) {
    // 加入建構子以及props參數
    super(props);
    this.state = {
      percent: "30%",
      repoName: null,
    };
    this.name = "舊的名字";
    this.changePercent = this.changePercent.bind(this); //綁定changePercent
    this.handleClick = this.handleClick.bind(this);
  }

  changePercent() {
    this.setState({ percent: this.state.percent === "70%" ? "30%" : "70%" });
    console.log("hey");
  }

  handleClick() {
    fetch("https://api.github.com/users/jserv/repos", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        /*接到request data後要做的事情*/
        this.setState({ repoName: data[0]["name"] });
      })
      .catch((e) => {
        /*發生錯誤時要做的事情*/
        console.log(e);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="data-display">{this.state.repoName === null ? "目前還有沒有資料" : this.state.repoName}</div>
        <button onClick={this.handleClick}>取得jserv以英文字母排序的第一個repo</button>
        <hr />
        <Parent />
      </div>
    );
  }
}

// function App(props) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <button onClick={props.handleClick}>{props.children}</button>
//       </header>
//     </div>
//   );
// }

export default App;
