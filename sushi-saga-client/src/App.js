import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sushis: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        return this.setState({ sushis: data });
      });
  }

  shuffleSushi = (arr) => {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    shuffled.splice(0, 3);
    return shuffled;
  };

  render() {
    const fourSushi = this.shuffleSushi(this.state.sushis);
    console.log(fourSushi);
    return (
      <div className="app">
        <SushiContainer sushis={fourSushi} />
        <Table />
      </div>
    );
  }
}

export default App;
