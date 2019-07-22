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
    const { construction, trucks, wheels, bearings, img, brand } = this.props;

    return (
      <div>
        <form action="submit">
          <input
            type="text"
            onChange={e => this.handleChange(e.target.value)}
            placeholder="name"
            value={this.state.input}
            className='update-field'
          />
          <span className='update' onClick={this.save}> Update</span>
        </form>
        <h3>{this.props.name}</h3>
        <div className="skates">
          <img src={img} alt="skateboards" />
        </div>
        <p>
          <b> Brand: </b>
          {brand} <br />
          <b>Construction: </b>
          {construction} <br />
          <b> Trucks: </b> {trucks} <br />
          <b> Wheels: </b>
          {wheels} <br />
          <b>Bearings: </b> {bearings} <br />
            <span className="delete" onClick={() => this.props.delBoard(this.props.id)}>
              {" "}
              Delete{" "}
            </span>
        </p>
      </div>
    );
  }
}
