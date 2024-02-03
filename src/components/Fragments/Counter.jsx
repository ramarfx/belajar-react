import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    console.log("constructor");
  }

  componentDidMount() {
    this.setState({ count: 10 });

    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (this.state.count === 10) {
      this.setState({ count: 0 });
    }
  }

  render() {
    return (
      <div className="flex gap-5 items-center">
        <h1>{this.state.count}</h1>
        <button
          className="bg-black text-white p-3"
          onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
        {console.log("render")}
      </div>
    );
  }
}

export default Counter;
