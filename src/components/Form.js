import React, { Component } from 'react'

export class Form extends Component {

    push(body){
        this.props.add(body)
    }


    render() {
        console.log(this.props)
        return (
            <div>
                 <form action="submit">
                        <input type="text" placeholder="construction"/>
                        <input type="text" placeholder='trucks'/>
                        <input type="text" placeholder='wheels'/>
                        <input type="text" placeholder='bearings'/>
                        <input type="text" placeholder='img'/>
                        <input type="text" placeholder='name'/>
                        <button onclick={this.push}>Add </button>
                    </form>
            </div>
        )
    }
}

export default Form
