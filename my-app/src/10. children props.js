import React from 'react';
import './App.css';
import './6. card_custom.css'; //custom css
import {Card} from './Card.js' //{ Card } means the obj was exported directly
                               //Card means it was exported with default
import {faker} from '@faker-js/faker'; //wasnt exported as default
                                        //we had to install facker with 
                                       // npm install @faker-js/faker --save-dev

function App() {
  
  const buttons = (
    <div>
       <button className='button button2'>Blue</button>
        <button className="button button3">Red</button> 
    </div>
  )

  return (
    <div className="App">
      <Card 
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        avatar={faker.image.avatar()}
      > {buttons}
        
        </Card>

        <Card 
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        avatar={faker.image.avatar()}
      > {buttons}
        
        </Card>

        <Card 
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        avatar={faker.image.avatar()}
      > {buttons}
        
        </Card>

        <Card 
        name={`${faker.name.firstName()} ${faker.name.lastName()}`}
        title={faker.name.jobTitle()}
        avatar={faker.image.avatar()}
      > {buttons}</Card>

        
    </div>
  );
}

export default App;
