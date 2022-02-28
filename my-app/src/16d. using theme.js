import React, { useState } from 'react';
import './App.css';
import './6. card_custom.css'; //custom css
import {Card} from './Card.js' 
import styled, {ThemeProvider, css} from 'styled-components'

const theme = {
  primary: "#4caf50",
  mango: 'yellow'
}

const Button = styled.button`
    border: none;
    ${props=>props.color && css`
      background-color: ${props=>props.length>2?props.theme[props.color]:props.length<2?"red":"pink"};
      color: ${props=>props.length<=1?'white':'black'};
    `}
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
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button color='mango' length={cards.length}>Toggle</Button>
        <button className={classes.join(" ")}  onClick= {toggleShowCard}>Toggle show/hide</button>
        {cardRenderer}
      </div>
    </ThemeProvider>
    
  );
}

export default App;

//here we imported css from the same styled component
//we created a const, theme, that holds some styling
//we use inline js to control the coloring
//for any props passed, its color and css are true ie exist
//change background color and color
//if the props, whihc is our card is > 2, then the theme should have card color
//we wraped our page withe a theme provider giving us acces to property theme whihc equal our them
//bc we have our theme we were able to tap into its color mango and primary
