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
  
  const changeNameHandler = () => setName("Yangu")
  
  const buttons = (
    <div>
       <button className='button button2'>Yes</button>
        <button className="button button3">No</button> 
    </div>
  )

  return (
    <div className="App">

      <button className='button4' onClick={changeNameHandler}>Change name</button>
      
      <Card 
        name={name}
        title={faker.name.jobTitle}
        avatar="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/735.jpg"
    > {buttons} </Card>
        
    </div>
  );
}

export default App;


//here we let go of faker except at the job title 
//hard coded everything
//went ahead and a had a button and onclick property
//created a useState to change name upon clicking the button