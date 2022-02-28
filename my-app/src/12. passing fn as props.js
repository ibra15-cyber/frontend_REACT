import React, { useState } from 'react';
import './App.css';
import './6. card_custom.css'; //custom css
import {Card} from './Card.js' //{ Card } means the obj was exported directly
                               //Card means it was exported with default
import {faker} from '@faker-js/faker'; //wasnt exported as default
                                        //we had to install facker with 
                                       // npm install @faker-js/faker --save-dev

function App() {

  const [name, setName] = useState("Karimu Toure")
  
  const changeNameHandler = (name) => setName(name)
  
  const buttons = (
    <div className='buttons'>
       <button className='button button2'>Yes</button>
        <button className="button button3">No</button> 
    </div>
  )

  return (
    <div className="App">

      <button className='button' onClick={() => changeNameHandler("John Doe")}>Change name</button>
      
      <Card 
        name={name} //passing a variable to a props.name
        title={faker.name.jobTitle()} //passing a variable of type faker 
        // avatar="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/735.jpg"
        avatar={faker.image.avatar()}
        onChangeName={() => changeNameHandler("Micheal Chan")}
    > {buttons} </Card>
        
    </div>
  );
}

export default App;

//here we continue our use of props 
//remember we created a Card fn in a different file called Card.js
//we created a fn Card 
//we passed a props
//went on to create our Card layouts: the components we need and how they should be layed
//but since we are using props, we did not hardcode it
//we exported it but without default hence we call it by {}
//we invoke the fn <Card /> and went on to provide the anticipated properties
//at the props.name we need name and our name was a variable we created in setState
//at the props.avater we have avatar that takes an img url 
//at the props.title we got a job title name from faker
//at the layout that takes a button inside <p> tag we had props.fnName so the fnName, onchangeName was passed a fn
//but because to diff buttons are going to control the same fn we needed to add () => before calling fn
//i reused facker to get the avatar