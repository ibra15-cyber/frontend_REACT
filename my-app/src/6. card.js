// import React from 'react';
import './App.css';
import './6. card_custom.css'; //custom css


function App() {
  return (
    <div className="App">
      <div className="card">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width:'40%'}} />
          <div class="container">
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
        </div>
      </div>
      <div className="card">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width:'40%'}} />
          <div class="container">
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
        </div>
      </div>
      <div className="card">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{width:'40%'}} />
          <div class="container">
            <h4><b>John Doe</b></h4> 
            <p>Architect & Engineer</p> 
        </div>
      </div>

     
    </div>
    
  );
}

export default App;
