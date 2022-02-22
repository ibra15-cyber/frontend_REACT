import React from 'react';
import './App.css';
import './6. card_custom.css'; //custom css
import {Card} from './Card.js' //{ Card } means the obj was exported directly
                               //Card means it was exported with default
import {faker} from '@faker-js/faker'; //wasnt exported as default
                                        //we had to install facker with 
                                       // npm install @faker-js/faker --save-dev

function App() {
  return (
    <div className="App">
      <Card 
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        avatar={faker.image.avatar()}
      />

      <Card 
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        avatar={faker.image.avatar()}
      />  

      <Card 
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        avatar={faker.image.avatar()}
      />

      <Card 
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        avatar={faker.image.avatar()}
      />  
    </div>
  );
}

export default App;
