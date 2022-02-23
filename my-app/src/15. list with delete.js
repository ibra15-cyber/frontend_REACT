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
      { 
        id: "1",
        name:"Karimu",
        title:'React dev', //passing a variable of type faker 
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/526.jpg",
      },
      { 
        id: "2",
        name:"Toure",
        title:'Flutter dev', //passing a variable of type faker 
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/526.jpg",
      },
      { 
        id: "3",
        name:"Razak",
        title:'Django dev', //passing a variable of type faker 
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/526.jpg",
      },
  ]);

  //arrow fns
  const toggleShowCard = () => setShowCard(!showCard)

  const deleteCardHandler = (cardIndex) => {
    const cards_copy = [...cards]
    cards_copy.splice(cardIndex,1)
    setCards(cards_copy)
  }

  const cardRenderer = showCard && (
    cards.map((card,index) =>
      <Card 
          key={card.id}
          name={card.name}
          title={card.title} 
          avatar={card.avatar}
          onDelete={() => deleteCardHandler(card)}
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

//then we created a fn deleteCardHandler
//we instruct our button in Card to return a props.fn
//we set that fn name=deleteCardHandler
//delte card handler takes a parameter
//it copies from cards using separator operator
//then we make a slice that takes out the particular item index to the 1 ie the next
//then we return the rest of the card 
//note splice makes new copy