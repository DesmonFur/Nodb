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
          <header>
            <Header />
          </header>
        </div>
        <div className="App">
          <main>
            <Collection />
          </main>
        </div>
        <div>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
