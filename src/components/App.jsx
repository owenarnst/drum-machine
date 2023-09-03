import { useState } from 'react'
import '../styles/app.css'
import {Pads, Controls} from './MainComponents.jsx'

//Drum Pad Symbols and Audio Links
const padInfo = [
  {symbol:"Q", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", description: "Heater 1", active: false},
  {symbol: "W", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", description: "Heater 2", active: false},
  {symbol:"E", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", description: "Heater 3", active: false},
  {symbol: "A", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", description: "Heater 4", active: false},
  {symbol:"S", audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", description: "Clap", active: false},
  {symbol: "D", audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", description: "Open-HH", active: false},
  {symbol:"Z", audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", description: "Kick-n'-Hat", active: false},
  {symbol: "X", audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", description: "Kick", active: false},
  {symbol: "C", audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", description: "Closed-HH", active: false}    
]

function Machine() {

  const [desc, updateDesc] = useState("");
  const [power, setPower] = useState(true);
  const [rangeVal, setRangeVal] = useState(50);
  const [volChange, isVolChange] = useState(false);


  const handleChange = (event) => {
      updateDesc("");
      setRangeVal(event.target.value);
      isVolChange(true);
      setTimeout(() => isVolChange(false), 2000);
  }

  const toggle = () => {
    updateDesc("");
    setPower(!power);
  }

  const getIndex = (symbol) => {
    for(let i = 0; i < padInfo.length; i++) {
      if(padInfo[i].symbol === symbol) {
        return i;
      }
    }
  }

  const handleKeyDown = (event) => {
    if ("qweasdzxc".indexOf(event.key.toLowerCase()) > -1) {
        const button = document.getElementById(event.key.toLowerCase());
        button.click();
      }
  }
  window.addEventListener('keydown', handleKeyDown);

  const handleClick = (event) => {
    if(power) {
      const symbol = event.target.textContent.toUpperCase();
      updateDesc(padInfo[getIndex(symbol)].description);
      const audioElement = document.getElementById(symbol);
      audioElement.volume = rangeVal/100;
      audioElement.currentTime = 0; // Reset playback position to the beginning
      audioElement.play();
    }
  }

  return (
    <>
        <div id="drum-set" className="container align-items-center">
          <Pads arr={padInfo} handleClick={handleClick} power={power} />
        </div>
        <Controls name={desc} switchPower={toggle} power={power} onRangeChange={handleChange} 
                  rangeValue={rangeVal} volumeChange={volChange} />
    </>
  );
}

function App() {
  return (
    <main className="container p-0" id="drum-machine">
      <Machine />
    </main>
  )
}

export default App
