import React, { Component } from "react";
import LightSpeed from 'react-reveal/Slide';

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      construction: "",
      trucks: "",
      wheels: "",
      bearings: "",
      img: "",
      name: "",
      brand: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="contain-form">
      <div className= 'form'>
          <LightSpeed>
      {/* <form action="submit"> */}
      <input
      type="text"
      placeholder="name"
      name="name"
      onChange={this.handleChange}
      />
      <input
      type="text"
      placeholder="construction"
      name="construction"
      onChange={this.handleChange}
      />
      <input
      type="text"
      placeholder="trucks"
      name="trucks"
      onChange={this.handleChange}
      />
      <input
      type="text"
      placeholder="wheels"
      name="wheels"
      onChange={this.handleChange}
      />
      <input
      type="text"
      placeholder="bearings"
      name="bearings"
      onChange={this.handleChange}
      />
      <input
      type="text"
      placeholder="img"
      name="img"
      onChange={this.handleChange}
      />
      <input
      type="text"
      placeholder="brand"
      name="brand"
      onChange={this.handleChange}
      />
      <input type="submit" value="Submit" onClick={() => this.props.addBoard(this.state)}></input>
      {/* <button onClick={() => this.props.addBoard(this.state)}>Add </button> */}
      {/* </form> */}
      </LightSpeed>
      </div>
      </div>
    );
  }
}

export default Form;
