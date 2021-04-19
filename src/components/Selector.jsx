import React, { useState } from 'react';
import '../styles/Selector.css';

import leftArrow from '../assets/caret-left.svg';
import rightArrow from '../assets/caret-right.svg';


const Selector = ({ items, callback, defaultIndex }) => {
    const [currIndex, setCurrIndex] = useState(defaultIndex);
    const leftArrowAction = () => {
        setCurrIndex(currIndex - 1);
        if(currIndex <= 0)
            setCurrIndex(items.length - 1);
        callback(currIndex);
    }
    const rightArrowAction = () => {
        setCurrIndex(currIndex + 1);
        if(currIndex >= items.length - 1)
            setCurrIndex(0);
        callback(currIndex);
    }
    return (
        <div className="login-selector">
            {
                items.length > 0 &&
                <div className="selector-left">
                    <img src={leftArrow} alt="left arrow" onClick={leftArrowAction.bind()} />
                </div>
            }
            <div className="selector-content" >{
                <div id={items[currIndex].key}>{items[currIndex].name}</div>
            }
            </div>
            {
                items.length > 0 &&
                <div className="selector-right">
                    <img src={rightArrow} alt="right arrow" onClick={rightArrowAction.bind()} />
                </div>
            }
        </div>
    );
}

export default Selector;
