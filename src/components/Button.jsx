import { useState } from 'react'
import '../styles/button.css'

export function Pad(props) {

    const style = {
        backgroundColor: "#513316",
        boxShadow: "none",
    };

    const [isActive, setIsActive] = useState(props.sound.active);

    const handleKeyUp = () => {
        setIsActive(false);
    }
    const handleKeyDown = (event) => {
        if ("qweasdzxc".indexOf(event.key.toLowerCase()) > -1) {
            setIsActive(props.sound.active);
            window.addEventListener('keyup', handleKeyUp);
          }
      }
    window.addEventListener('keydown', handleKeyDown);
    
    return (
            <div className="drum-pad d-flex justify-content-center px-0 col-4">
                <audio id={props.sound.symbol} className="clip" src={props.sound.audio} ></audio>
                <button id={props.sound.symbol.toLowerCase()} onClick={props.buttonClick} style={isActive ? style : {}}>
                    {props.sound.symbol}
                </button>
            </div>
    );
}