import React, { Component } from 'react'

export default class Skateboards extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.id,
            skateboards: this.props.name,
            input: ''
        }
        this.save = this.save.bind(this)
    }

handleChange(e){
    this.setState({input: e})
}

save(){
    this.props.editer( this.state.id, {name: this.state.input})
    this.setState({skateboards:  this.state.input})
}




    render() {
        
        const {construction, trucks, wheels, bearings,img} = this.props
        const {skateboards} = this.state
        return (
            
            <div>
            <form action="submit"><input type="text"
            onChange={e => this.handleChange(e.target.value)}
            placeholder="name"
            value={this.state.input}
            />
            <button onClick={this.save}> Update</button></form>
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
