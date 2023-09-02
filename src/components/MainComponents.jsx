import '../styles/main-components.css'
import { Pad } from './Button'

export function Pads(props) {
    let loop=[3,6,9]
    return (
        loop.map(index => {
            return (
                <div className="row my-2" key={index/3}>
                    <Pad sound={props.arr[index-3]} buttonClick={props.handleClick} />
                    <Pad sound={props.arr[index-2]} buttonClick={props.handleClick} />
                    <Pad sound={props.arr[index-1]} buttonClick={props.handleClick} />
                </div>
            )
        })
    );
}

export function Controls(props) {
    return (
        <div id="control-panel" className='container p-3'>
            <div className="row d-flex justify-content-center">
                <div id="power-switch">
                    <div className='slider'></div>
                </div>
            </div>
            <div className="row d-flex justify-content-center" id="display-info">
                <h3 className='d-flex justify-content-center align-items-center'>{props.name}</h3>
            </div>
            <div className="row d-flex justify-content-center">
                <input id="volume-slider" className="range-input" type="range" min="0" max="100" />
            </div>
        </div>
    )
}
