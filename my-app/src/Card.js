import React from 'react'
import './App.css'

export const Card = (props) => {
    return (
        <div className="card">
            <img src={props.avatar} alt="Avatar" style={{width:'40%'}} />
            <div class="container">
                <h4><b>{props.name}</b></h4> 
                <p>{props.title}</p> 
                <p>{props.children}</p>
            </div>
        </div>
    )
}

//here what happen was we exported this Card several times in Apps.js
//then we added a property name to the component exported
//then we decided to pass props and then our name = props.name ie the
//use the name we passed to you. 
//this changes the structure of the rest of Card without name propery 
//as they are rendered empty


//or see it deffrently: we created a component and passing a prop 
//we define what whose property variables are
//then we call those property name or variable when we render our component
//its like obj in classes

//props.children is infered into directly