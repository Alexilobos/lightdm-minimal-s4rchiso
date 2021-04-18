import React from 'react';
import '../styles/Selector.css';

import leftArrow from '../assets/caret-left.svg';
import rightArrow from '../assets/caret-right.svg';

const Selector = (props) => {
    return (
        <div className="login-selector">
            <div className="selector-left">
                <img src={leftArrow} alt="left arrow" />
            </div>
            <div className="selector-content"></div>
            <div className="selector-right">
                <img src={rightArrow} alt="right arrow" />
            </div>
        </div>
    );
}

export default Selector;
