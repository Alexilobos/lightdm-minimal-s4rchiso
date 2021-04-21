import React, { Component, useState } from 'react';
import '../styles/Selector.css';

import leftArrow from '../assets/caret-left.svg';
import rightArrow from '../assets/caret-right.svg';


class Selector extends Component {
    constructor({ items, callback, defaultIndex }){
        super({ items, callback, defaultIndex });
        this.state = {
            currIndex: defaultIndex,
        };
        this.items = items;
        this.callback = callback;
    }
    leftArrowAction = () => {
        let currindex = this.state.currIndex - 1
        if(currindex < 0)
            currindex = this.items.length - 1; 
        this.setState({ currIndex: currindex}); 
        this.callback(currindex, this.items[currindex].name);
    }
    rightArrowAction = () => {
        let currindex = this.state.currIndex + 1;
        if(currindex >= this.items.length - 1)
            currindex = 0; 
        this.setState({ currIndex: currindex });
        this.callback(currindex, this.items[currindex].name);
    }
    render(){
        return (
            <div className="login-selector">
                {
                    this.items.length > 0 &&
                    <div className="selector-left">
                        <img src={leftArrow} alt="left arrow" onClick={this.leftArrowAction.bind()} />
                    </div>
                }
                <div className="selector-content" >{
                    <div id={this.items[this.state.currIndex].key}>{this.items[this.state.currIndex].name}</div>
                }
                </div>
                {
                    this.items.length > 0 &&
                    <div className="selector-right">
                        <img src={rightArrow} alt="right arrow" onClick={this.rightArrowAction.bind()} />
                    </div>
                }
            </div>
        );
    }
}

export default Selector;
