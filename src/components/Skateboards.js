import React, { Component } from 'react'


export default class Skateboards extends Component {
    constructor(){
        super()
        this.state = {
            skateboards: []
        }
    }


    render() {
        console.log(this.props)
        const {key, construction, trucks, wheels, bearings,img,name} = this.props
        return (
            <div>
                <section>
                <h2>
                {name}
                </h2>
                  <p>{construction}</p>  
                    <p>{trucks}
                    {wheels}
                    {bearings}</p>
        
                    <img src={img} alt=""/>


                </section>
            </div>
        )
    }
}
