import React, { useState } from 'react';
import './App.css';
import './6. card_custom.css'; //custom css
import {Card} from './Card.js' //{ Card } means the obj was exported directly
                               //Card means it was exported with default
import {faker} from '@faker-js/faker'; //wasnt exported as default
                                        //we had to install facker with 
                                       // npm install @faker-js/faker --save-dev

function App() {

  //setState
  const [showCard, setShowCard] = useState(true)
  const [cards, setCards] = useState([

      { name:"Karimu",
        title:'React dev', //passing a variable of type faker 
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/526.jpg",
      },
      { name:"Toure",
        title:'Flutter dev', //passing a variable of type faker 
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/526.jpg",
      },
      { name:"Razak",
        title:'Django dev', //passing a variable of type faker 
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/526.jpg",
      },
  ])
  //arrow fns
 
  const toggleShowCard = () => setShowCard(!showCard)

  const cardRenderer = showCard && (
    cards.map(card =>
      <Card name={card.name}
          title={card.title} 
          avatar={card.avatar}
      />
    ) 
  ) 
  

  return (
    <div className="App">

      <button className='button4' onClick= {toggleShowCard}>Toggle show/hide</button>
      {cardRenderer}
    </div>
  );
}

export default App;

//so with this we got a card that takes props and is expecting a layout of:
//  avatar.prop as image
//  prop.name as <p>
//  props.fn inside a <p> inside a <button>
//  here we call the card and we passed those arguement as name, avatar and fn
//  we created a state that makes a list of dic items
// we rendered our card by mapping it with the list 
// for each item inside cards, map item to a card where item inherits the properties of the diction
