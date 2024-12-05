import React, { Component } from "react";
class Baby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRightDad: true,
      isGetData: false,
      Mom: "",
    };
    this.ajaxSimulator = this.ajaxSimulator.bind(this);
    // this.scrollTo = this.scrollTo.bind(this);
  }

  ajaxSimulator() {
    setTimeout(() => {
      this.setState({ isGetData: true, Mom: "小美" });
    }, 3000);
  }

  //   scrollTo() {
  //     /* 讀取 container元素的scrollLeft */
  //     let scrollLeft = document.getElementById("container").scrollLeft;
  //     if (scrollLeft < 300) {
  //       /* 修改 container元素的scrollLeft */
  //       document.getElementById("container").scrollLeft = scrollLeft + 5;
  //       setTimeout(this.scrollTo, 20);
  //     }
  //   }

  //   static getDerivedStateFromProps(props, state) {
  //     if (props.dad !== "Chang") return { isRightDad: false };
  //   }

  componentWillMount() {
    if (this.props.dad !== "Chang") this.setState({ isRightDad: false });
  }

  //   componentDidMount() {
  //     if (this.state.isRightDad === true) document.getElementById("msg").innerHTML = "他的媽媽是小美";
  //     else document.getElementById("msg").innerHTML = "他的媽媽，是誰，干你X事";
  //   }
  componentDidMount() {
    this.ajaxSimulator();
    // this.scrollTo(); // 觸發開場動畫
    document.getElementById("talk").append("爸!");
  }

  componentWillUnmount() {
    document.getElementById("talk").innerHTML = "";
  }

  render() {
    if (this.state.isGetData === false) return <div id="msg">讀取中</div>;
    else return <div id="msg">他的媽媽是{this.state.Mom}</div>;
  }
}

export default Baby;
