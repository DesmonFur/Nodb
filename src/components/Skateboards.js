import React, { Component } from "react";

export default class Skateboards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      skateboards: this.props.name,
      input: "",
      filter: ""
    };
    this.save = this.save.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e });
  }

  save() {
    this.props.editer(this.state.id, { name: this.state.input });
    // this.setState({skateboards:  this.state.input})
  }

  render() {
    const { construction, trucks, wheels, bearings, img } = this.props;
    const { skateboards } = this.state;
    return (
      <div>
        <form action="submit">
          <input
            type="text"
            onChange={e => this.handleChange(e.target.value)}
            placeholder="name"
            value={this.state.input}
          />
          <button onClick={this.save}> Update</button>
        </form>
        <h3>{this.props.name}</h3>
        <div className="skates">
          <img src={img} alt="skateboards" />
        </div>
        <p>
          {construction} <br />
          {trucks} <br />
          {wheels} <br />
          {bearings} <br />
          <button onClick={() => this.props.delBoard(this.props.id)}>
            {" "}
            Delete{" "}
          </button>
        </p>
      </div>
    );
  }
}
