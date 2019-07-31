import React from 'react';
import './App.css';

function App() {
  return (
    <div className="major-div">
      <h1>My favorite movies</h1>
      <ul>
        <li>
          <p><em>The Godfather</em> - Francis Ford Coppola</p>
          <img alt="godfather-vito-corleone" src="https://media1.tenor.com/images/0eeb4cebb06e554334bfce6138d32834/tenor.gif?itemid=4462663"></img>
        </li>
        <li>
          <p><em>El Laberinto del Fauno</em> - Guillermo del Toro</p>
          <img alt="laberinto-del-fauno-ofelia" src="https://66.media.tumblr.com/dd7a20e9e915287747257f27f03a8e25/tumblr_o497wq3Ho51s3h6j4o1_500.gif"></img>
        </li>
        <li>
          <p><em>Django Unchained</em> - Quentin Tarantino</p>
          <img alt="django" src="https://media1.tenor.com/images/dee89bbecb78d7cda8ac23d52eebc308/tenor.gif?itemid=3455229"></img>
        </li>
      </ul>
    </div>
  );
}

export default App;