import React, { useState } from 'react';
import './App.css';
import './6. card_custom.css'; //custom css
import {Card} from './Card.js' 
import styled from 'styled-components'

const Button = styled.button`
    background-color: ${props=>props.length>2?"#4Caf50":props.length<2?"red":"pink"};
    border: none;
    color: ${props=>props.length<=1?'black':'white  '};
    font-weight: ${props=>props.length<=1?'bold':'normal'};
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2x;
    cursor: pointer;
    margin-right: 5px;
    margin-botton: 30px;
`

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

  const classes = ['button']
  if (cards.length < 3) classes.push('pink') //classes = button4 pink ie render the button4 then pin
  if (cards.length < 2) classes.push('text red') //classes = button4 red text ie green red also the text


  return (
    <div className="App">
      <Button length={cards.length}>Toggle</Button>
      <button className={classes.join(" ")}  onClick= {toggleShowCard}>Toggle show/hide</button>
      {cardRenderer}
    </div>
  );
}

export default App;

//here we are using a style library, styled from style components
//we created a const Button which is a styled object and a tag to be called
//we invoke the button method and passed our styling, 
//we the color we say whatever we will be passing if the length is > 2 or <2 change accordingly
//then inside our created tag Button, we invoke the length attr and we passed our card as the tracker
//we usde cards.length to make sure we are looking for the length 

