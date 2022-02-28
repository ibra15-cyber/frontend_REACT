// import React, { useState } from 'react';
import React, {Component} from 'react'
import './App.css';
import './6. card_custom.css'; //custom css
import {Card} from './Card.js' 
import {ThemeProvider} from 'styled-components'
import {Button} from './16e. element/Button'

const theme = {
  primary: "#4caf50",
  mango: 'yellow'
}

class App extends Component {
  //we got a constructor that extends component
  //it inherits props from components
  //it inherit state from components
  //we initialize state by refering to this.state
  //we passed the variables that would have been declared using useState with initial value in and fn to change the state
  //so both items inside the state of the component extended here have state characteristics
  constructor(props){
    console.log("App js constructor")
    super(props)
    this.state={
      cards: [
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
      ],
      showCard: true
    }
  }

  static getDerivedStateFromProps(props, state){
    console.log("getDrivedStateFromProps", props)
    return state
  }

  //arrow fns
  // const toggleShowCard = () => setShowCard(!showCard)
  // remember setShowCard a fn incharge of changing the state of showCard
  //destructure showCard and use the exact opposite when toggleshowCard fn is called
  toggleShowCard = () => this.state({showCard:!this.state.showCard})

  // const changeNameHandler  = (item, id)=> {
  changeNameHandler  = (item, id)=> {

    //iterate our cards and return the index of each
    //get index of any item in the card
    //ie for each cardItem in card return those where cardItem.id == id ie true
    //save them as cardIndex
    const cardIndex = this.state.cards.findIndex(cardItem => cardItem.id === id) //here the id match return that index

    // //make copy of the card
    // const cards_copy = [...cards]
    //destructure cards making a copy
    const cards_copy = [...this.state.cards]

    // //for each index find the name and make it the name typed
    // //change the name prop to the value bein passed int input
    cards_copy[cardIndex].name=item.target.value
    
    // setCards(cards_copy)
    this.setState({cards:cards_copy})

  }

  // const deleteCardHandler = (cardIndex) => {
  deleteCardHandler = (cardIndex) => {
    const cards_copy = [...this.state.cards]
    //delete that particular card
    cards_copy.splice(cardIndex,1)
    //then return the rest
    this.setState({cards:cards_copy})
  }

  componentDidMount(){
    console.log("App js componnet did mount")
  }

  render() {
  
    console.log("app js render")
    const classes = ['button']
    if (this.state.cards.length < 3) classes.push('pink') //classes = button4 pink ie render the button4 then pin
    if (this.state.cards.length < 2) classes.push('text red') //classes = button4 red text ie green red also the text
    
    //when showCard state is true then show the card else
    //if its false you do nothing
    const cardRenderer = this.state.showCard && (
        this.state.cards.map((card,index) =>
          <Card 
              key={card.id}
              name={card.name}
              title={card.title} 
              avatar={card.avatar}
              onDelete={() => this.deleteCardHandler(card)}
              onChangeName={(cardItem) => this.changeNameHandler(cardItem, card.id)}
          />
        )  
      )

    return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button color='mango' length={this.state.cards.length} onClick= {this.toggleShowCard}>Toggle</Button>
        <button className={classes.join(" ")}  onClick= {this.toggleShowCard}>Toggle show/hide</button>
        {cardRenderer}
      </div>
    </ThemeProvider>
    
  );
  }
}

export default App;
