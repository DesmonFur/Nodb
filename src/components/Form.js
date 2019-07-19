import React, { Component } from 'react'

export class Form extends Component {
    constructor(){
        super()
        this.state= {
            construction:'',
            trucks:'',
            wheels: '',
            bearings: '',
            img: '',
            name: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }

    
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    render() {
        console.log(this.state)
        return (
            <div>
                 {/* <form action="submit"> */}
                        <input type="text" placeholder='name' name='name' onChange={this.handleChange}/>
                        <input type="text" placeholder="construction" name="construction" onChange={this.handleChange}/>
                        <input type="text" placeholder='trucks' name="trucks" onChange={this.handleChange}/>
                        <input type="text" placeholder='wheels' name='wheels' onChange={this.handleChange}/>
                        <input type="text" placeholder='bearings' name='bearings' onChange={this.handleChange}/>
                        <input type="text" placeholder='img' name='img' onChange={this.handleChange}/>
                        <button onClick={ () => this.props.addBoard(this.state)}>Add </button>
                    {/* </form> */}
            </div>
        )
    }
}

export default Form
