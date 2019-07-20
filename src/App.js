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
      <div>
        <div>
          <Header />
        </div>
        <div className="App">
          <h2> SKATEBOARD COLLECTION </h2>
          <Collection />
        </div>
      </div>
    );
  }
}

export default App;
