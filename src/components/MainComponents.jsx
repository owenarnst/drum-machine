import '../styles/main-components.css'
import { Pad } from './Button'
import { useState } from 'react'

export function Pads(props) {
    let loop=[3,6,9]
    return (
        loop.map(index => {
            return (
                <div className="row my-2 custom" key={index/3}>
                    <Pad index={index-3} sound={props.arr[index-3]} buttonClick={props.handleClick} power={props.power} />
                    <Pad index={index-2} sound={props.arr[index-2]} buttonClick={props.handleClick} power={props.power} />
                    <Pad index={index-1} sound={props.arr[index-1]} buttonClick={props.handleClick} power={props.power} />
                </div>
            )
        })
    );
}

export function Controls(props) {

    return (
        <div id="display" className='container p-4'>
            <div id="power-switch" className="row flex-column justify-content-center align-items-center">
                <p>Power</p>
                <button id="switch" className={props.power ? '' : 'off'} onClick={props.switchPower}>
                    <div className='slider'></div>
                </button>
            </div>
            <div className="row d-flex justify-content-center" id="display-info">
                <h3 className='d-flex justify-content-center align-items-center'>
                    {props.volumeChange ? `Volume: ${props.rangeValue}` : props.name}
                </h3>
            </div>
            <div className="row d-flex justify-content-center">
                <input id="volume-slider" className="range-input" type="range" min="0" max="100" disabled={!props.power} 
                       value={props.rangeValue} onChange={props.onRangeChange}/>
            </div>
        </div>
    )
}
