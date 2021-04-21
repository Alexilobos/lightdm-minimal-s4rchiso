import React, { useState } from 'react';
import '../styles/Selector.css';

import leftArrow from '../assets/caret-left.svg';
import rightArrow from '../assets/caret-right.svg';


const Selector = ({ items, callback, defaultIndex }) => {
    const [currIndex, setCurrIndex] = useState(defaultIndex);
    const leftArrowAction = () => {
        let currindex = currIndex - 1
        if(currindex <= 0)
            currindex = items.length - 1;
        setCurrIndex(currindex);
        callback(currindex, items[currindex].name);
    }
    const rightArrowAction = () => {
        let currindex = currIndex + 1;
        if(currindex >= items.length - 1)
            currindex = 0;
        setCurrIndex(currindex);
        callback(currindex, items[currindex].name);
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
