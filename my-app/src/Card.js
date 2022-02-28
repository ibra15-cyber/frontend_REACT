import React  from 'react'
import './App.css'
import { Component } from 'react'

export class Card extends Component{
    //props is variable accessible directory in a class hence this.props 
    //where ever

    componentWillUnmount(){
        console.log("card js component will unmount")
    }
    
    render(){
        console.log("card rendering")
        return (
            <div className="card">
                <img src={this.props.avatar} alt="Avatar" style={{width:'40%'}} />
                <div className="container">
                    <h4><b>{this.props.name}</b></h4> 
                    <input type='text' value={this.props.name} onChange={this.props.onChangeName}/>
                    <p>{this.props.title}</p> 
                    <p><button className='button-red' onClick={this.props.onDelete}>Delete</button></p>
                    <div>{this.props.children}</div>
                </div>
            </div>
        )
    }
}
