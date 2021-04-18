import React from 'react';
import '../styles/LoginBox.css';

import Selector from './Selector';


const provide_secret = (e) => {
    e.preventDefault();
}


const LoginBox = (props) => {
    return (
        <form className="login-box" onSubmit={provide_secret.bind(this)}>
            <img className="image-profile" src={props.icon} alt="User Profile"/>
            <Selector items={props.users} />
            <Selector items={props.sessions} />
            <input  className="input-password"
                    placeholder="Enter your password"
                    type="password"/>
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginBox;
