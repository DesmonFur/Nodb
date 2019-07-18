import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Collection from './components/Collection'
import Skateboards from './components/Skateboards'
class App extends Component {
constructor(){
  super()
}






  render(){
  return (
    <div className="App">
    <div className="header">
      <header>
        <Header />
      </header>
    <section>
      <Collection />
      <Skateboards />
    </section>

    </div>
    </div>
  )}
}

export default App;
