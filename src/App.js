import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Collection from "./components/Collection";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="App">
          <Collection />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
