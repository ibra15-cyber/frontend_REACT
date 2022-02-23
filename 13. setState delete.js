const cards = ([
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
]);

const deleteHandler = (cardIndex) => {
    const cards_copy = [...cards]
    cards_copy.splice(cardIndex,1)
    setCards(cards_copy)
}
console.log(cards)
console.log(cards.map(item => item.name))

const cards_copy = [...cards] //make copy of everthing
console.log(cards_copy)
console.log(cards_copy.splice(0,1)) //show from the first and not including the next
