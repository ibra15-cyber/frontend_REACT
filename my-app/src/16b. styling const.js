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
        name: "Toure",
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

  const changeNameHandler  = (item, id)=> {
    //get index of any item in the card
    //ie for each cardItem in card return those where cardItem.id == id ie true
    //save them as cardIndex
    const cardIndex = cards.findIndex(cardItem => cardItem.id == id) //here the id match return that index

    // //make copy of the card
    const cards_copy = [...cards]
    // //for all the items where id's are same
    // //change the name prop to the value bein passed int input
    cards_copy[cardIndex].name=item.target.value
    
    setCards(cards_copy)
  }

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
          onChangeName={(cardItem) => changeNameHandler(cardItem, card.id)}
      />
    )  
  ) 

  const classes = ['button4']
  if (cards.length < 3) classes.push('pink') //classes = button4 pink ie render the button4 then pin
  if (cards.length < 2) classes.push('text') //classes = button4 red text ie green red also the text


  return (
    <div className="App">

      <button className={classes.join(" ")}  onClick= {toggleShowCard}>Toggle show/hide</button>
      {cardRenderer}
    </div>
  );
}

export default App;

//here instead of passing a style to className in string
//we created a const to hold the style names
//we set a condition that if the card left is less than 3, add pink to the const list
//then calling classes to join them with ' ' ie present two styles button4 pink
//same for the next line unfortunately only the text works but not the red color