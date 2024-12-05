import React, { Component } from "react";

class Brother extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeling: "?",
      expectAmount: 40,
    };
    this.argueFor70NTD = this.argueFor70NTD.bind(this);
    this.setMyFeeling = this.setMyFeeling.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.money !== this.props.money) {
      this.setMyFeeling();
    }
  }

  argueFor70NTD() {
    this.props.argue("brother", 70);
  }

  setMyFeeling() {
    if (this.props.money < this.state.expectAmount) this.setState({ feeling: "不能接受" });
    else this.setState({ feeling: "可以接受" });
  }

  render(){
    return(<div>我是兒子，我拿到{this.props.money}，我目前{this.state.feeling}</div>);
}
}

export default Brother;
