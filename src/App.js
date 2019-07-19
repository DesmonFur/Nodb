import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Collection from "./components/Collection";
import Skateboards from "./components/Skateboards";
class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <h2> SKATEBOARD COLLECTION </h2>
        <Collection />
      </div>
    );
  }
}

export default App;
