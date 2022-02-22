import React from 'react';
import './App.css';
import './6. card_custom.css'; //custom css
import {Card} from './Card.js' //{ Card } means the obj was exported directly
                               //Card means it was exported with default


function App() {
  return (
    <div className="App">
      <Card name="Alan Smith"/>
      <Card />
      <Card />
    </div>
  );
}

export default App;
