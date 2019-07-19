import React, { Component } from 'react'
import axios from 'axios'

export default class Skateboards extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.id,
            skateboards: this.props.name
        }
        this.save = this.save.bind(this)
    }

handleChange(e){
    this.setState({skateboards: e})
}

save(){
    this.props.editer( this.state.id, {name: this.state.skateboards})
}




    render() {
        console.log(this.state.id)
        const {construction, trucks, wheels, bearings,img} = this.props
        const {skateboards} = this.state
        console.log(this.state)
        return (
            
            <div>
              
            <input type="text"
              onChange={e => this.handleChange(e.target.value)}
              placeholder="name"
              />    
            <button onClick={this.save}> Update</button>
        <h3>{skateboards}</h3>
                    
                <img src={img} alt="skateboards"/>
                  <p> {construction}  <br/>
                    {trucks} <br/>
                    {wheels} <br/>
                    {bearings}
                    </p>
            
            </div>
                    
        )
    }
}
