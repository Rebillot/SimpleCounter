import React, { useState, useEffect } from 'react';
import './App.css';
import { faClock} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function useSeconds() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);


  return seconds;
}

const handleRefresh = () =>{
    window.location.reload();
  };

export function Counter() {
  const segundos = useSeconds();

  return (
    <div>
       <div className="contador">
      <div className="row">
        <div className="col" id='logo'>LOGO</div>
        <div className="col">{Math.floor(segundos / 1000) % 10}</div>
        <div className="col">{Math.floor(segundos / 100) % 10}</div>
        <div className="col">{Math.floor(segundos / 10) % 10}</div>
        <div className="col">{segundos % 10}</div>
      </div>
    </div>
        <div className="row" id='boton'><button onClick={handleRefresh}>RESET</button></div>
   </div>
   
  );
}





