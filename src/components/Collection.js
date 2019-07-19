import React, { Component } from 'react'
import axios from 'axios'
import Skateboards from "./Skateboards";

export default class Collection extends Component {
    constructor(){
        super()
        this.state = {
            skateArr: []
        }
    }

componentDidMount(){
    axios.get('/api/skateboards').then(res => {
        this.setState({skateArr: res.data})
    })
}


    render() {
        const {skateArr} = this.state


        console.log(this.state.skateArr)
        return (
            <div className="collections">
            <h2> SKATEBOARD COLLECTION</h2>

{
                    skateArr.map( skates =>(
                        <Skateboards 
                
                    key={skates.id}
                    construction={skates.construction}
                    trucks={skates.trucks}
                    wheels={skates.wheels}
                    bearings={skates.bearings}
                    img={skates.img}
                    name={skates.name}
                    
                    
                    />
                    ))
                }
                
            </div>
        )
    }
}
