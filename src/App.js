import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [position, setPosition] = useState();


  function getLocation() {
    if (navigator.geolocation) {
      //console.log(navigator.geolocation.getCurrentPosition());
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("chka");
    }
  }

  function showPosition(position) {
    console.log("ka");

    setPosition({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          {position && position.coords ? (
            <>
              <span>{`Latitude: ${position.coords.latitude}`} </span>
              <span>{`Longitude: ${position.coords.longitude}`} </span>
            </>
          ) : (
            <span>Waiting ...</span>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
