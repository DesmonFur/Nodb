import React, { Component } from 'react'


export default class Skateboards extends Component {
    constructor(props){
        super(props)
        this.state = {
            skateboards: this.props.name,
            editing: false
        }
    }

toggle(){
    this.setState({editing:!this.state.editing})
}

handleChange(e){
    this.setState({skateboards: e.target.value})
}


    render() {
        console.log(this.props)
        const {construction, trucks, wheels, bearings,img,name} = this.props
        return (
            
            <div>
                
                <img src={img} alt=""/>
                  <p> {construction}  <br/>
                    {trucks} <br/>
                    {wheels} <br/>
                    {bearings}
                    </p>
                    

                <p>{this.state.skateboards}</p>
                    {
                        this.state.editing ? (
                            <div> 
                                <input 
                                type="text" 
                                value={this.state.name
                                onChange
                                    />
                            </div>
                        )
                    }
            
            </div>
        )
    }
}
