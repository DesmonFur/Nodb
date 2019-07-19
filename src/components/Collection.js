import React, { Component } from 'react'
import axios from 'axios'
import Skateboards from "./Skateboards";
import Form from './Form'

export default class Collection extends Component {
    constructor(){
        super()
        this.state = {
            skateArr: []
        }
        this.edit = this.edit.bind(this)
        this.addBoard= this.addBoard.bind(this)

    }

componentDidMount(){
    axios.get('/api/skateboards').then(res => {
        this.setState({skateArr: res.data})
    })
}

addBoard(body) {
    axios.post('/api/skateboards', body).then(res => {
        this.setState({skateArr: res.data})
    })
}

edit(id,body){
    axios.put(`/api/skateboards/${id}`, body).then(res => {
        this.setState({
            skateArr: res.data
        })
    })
}

    render() {
        const {skateArr} = this.state

        return (

            <div>
                <Form add={this.addBoard} 
                bodyP = {this.state.skateArr}
                />
                <div>
                   
                </div>
            
            <div className="collections">
            
            
            {
            skateArr.map( skates =>(
            <Skateboards
            
            id={skates.id}
            construction={skates.construction}
            trucks={skates.trucks}
            wheels={skates.wheels}
            bearings={skates.bearings}
            img={skates.img}
            name={skates.name}
            editer={this.edit}
            add={this.add}
            />
            ))
            
            
            
            }
            
            </div></div>
        )
    }
}
