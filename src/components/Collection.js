import React, { Component } from "react";
import axios from "axios";
import Skateboards from "./Skateboards";
import Form from "./Form";

export default class Collection extends Component {
  constructor() {
    super();
    this.state = {
      skateArr: [],
      brand: ""
    };
    this.edit = this.edit.bind(this);
    this.addBoard = this.addBoard.bind(this);
    this.delBoard = this.delBoard.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    axios.get("/api/skateboards").then(res => {
      this.setState({ skateArr: res.data });
    });
  }

  addBoard(body) {
    axios.post("/api/skateboards", body).then(res => {
      this.setState({ skateArr: res.data });
    }).catch(() => 'No can add');
  }

  delBoard(id) {
    console.log("hitaddBoard", id);
    axios
      .delete(`/api/skateboards/${id}`)
      .then(res => {
        this.setState({ skateArr: res.data });
      })
      .catch(() => alert("NANI!"));
  }

  edit(id, body) {
    axios.put(`/api/skateboards/${id}`, body).then(res => {
      this.setState({
        skateArr: res.data
      });
    }).catch(() => alert('NO EDIT'))
    ;
  }

  find(value) {
    let filtered = this.state.skateArr.filter(
      word => word === this.state.skateArr.brand
    );
    this.setState({ brand: filtered });
  }
  search(brand) {
    console.log(this.state.brand);
    axios.get(`/api/skateboardBrands?brand=${this.state.brand}`).then(res => {
      // console.log(res.data)
      this.setState({ skateArr: res.data });
    })
    ;
  }

  render() {
    const { skateArr } = this.state;
    console.log(skateArr);
    return (
      <div>

        <div className='query'>
          <input
            type="text"
            onChange={e => this.setState({ brand: e.target.value })}
            placeholder='Find by Brand'
          />
          <input type='submit' onClick={this.search}  />
        </div>

        <div className="collections">
          {skateArr.map(skates => (
            <Skateboards
              key={skates.id}
              id={skates.id}
              construction={skates.construction}
              trucks={skates.trucks}
              wheels={skates.wheels}
              bearings={skates.bearings}
              img={skates.img}
              name={skates.name}
              brand={skates.brand}
              editer={this.edit}
              add={this.add}
              delBoard={this.delBoard}
              search={this.search}
            />
          ))}
        </div>
              <Form addBoard={this.addBoard} skateArr={this.state.skateArr} />
      </div>
    );
  }
}
