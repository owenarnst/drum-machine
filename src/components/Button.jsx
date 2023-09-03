import { useState, useEffect, useRef } from 'react'
import '../styles/button.css'

export function Pad(props) {

    const style = {
        backgroundColor: props.power ? "rgb(204, 158, 115)" : "",
        boxShadow: "none",
    };

    const [isActive, setIsActive] = useState(false);

    const animate = () => {
        setIsActive(true);
        setTimeout(() => setIsActive(false), 200);
    }
    
    const handleKeyPress = (event) => {
        if(event.key === props.sound.symbol.toLowerCase()) {
            animate();
        }
    }

    useEffect(() => {
        window.addEventListener('keypress', handleKeyPress);
        // Cleanup function to remove the event listener when the component unmounts
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      }, []);

    return (
            <div className="d-flex justify-content-center px-0 col-4">
                <button 
                    id={props.sound.symbol.toLowerCase()} 
                    className='drum-pad'
                    onClick={props.buttonClick} 
                    onMouseUp={animate}
                    style={isActive ? style : {}}
                >
                    <audio id={props.sound.symbol} className="clip" src={props.sound.audio} ></audio>
                    {props.sound.symbol}
                </button>
            </div>
    );
}