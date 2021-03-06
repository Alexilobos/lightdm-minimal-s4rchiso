import React, { Component } from 'react';
import '../styles/LoginBox.css';

import DefaultAvatar from '../assets/profile.png';
import Selector from './Selector';
import capsLock from 'capslock';
//import mock from '../utils/mock'
const lightdm = window.lightdm;

let users = [],
    sessions = [];

for (let userIndex in lightdm.users) {
    let oldUser = lightdm.users[userIndex];
    let newUser = {
        key: userIndex,
        name: oldUser.username,
        image: oldUser.image,
        logged: oldUser.logged_in,
    };
    users.push(newUser);
}
for (let sessionIndex in lightdm.sessions) {
    let session = lightdm.sessions[sessionIndex];
    sessions.push({
        key: sessionIndex,
        name: session.name,
        comment: session.comment
    });
}

class LoginBox extends Component {
    constructor(props) {
        super(props);
        window.authentication_complete = this.authentication_complete.bind(this);
        window.show_prompt = this.show_prompt.bind(this);
        window.show_message = this.show_message.bind(this);
        this.state = {
            userSelect: "",
            userSelectIndex: 0,
            sessionSelect: "",
            sessionSelectIndex: 0,
            password: "",
            passwordError: "",
            passwordStyle: {
                color: '',
                borderColor: 'orange'
            },
            authenticating: false,
            avatarSrc: DefaultAvatar
        };
    }
    changeUserName = (event, index, selectedUserName) => {
        this.setState({ userSelect: selectedUserName });
        if (this.getUserByName(selectedUserName).session)
            this.changesessionKey(null, null, this.getUserByName(selectedUserName).session);
        console.debug('Changed user to', selectedUserName || index);
    }
    changesessionKey = (event, index, sessionKey) => {
        this.setState({ sessionSelect: sessionKey });
        console.debug('Changed session to', sessionKey || index);
    }
    passwordWarningStyle = {
        color: '',
        border: '1px solid #ffa59b !important'
    }
    updatePassword = (event) => {

        // Show warning if capslock is enabled
        if (capsLock.status) {
            this.setState({password: event.target.value, passwordError: 'Capslock is on.', passwordStyle: this.passwordWarningStyle});
        } else {
            this.setState({password: event.target.value, passwordError: '', passwordStyle: {}});
        }
    }
    login(e) {
        e.preventDefault();
        lightdm.cancel_autologin();

        if (lightdm.in_authentication)
            lightdm.cancel_authentication();

        lightdm.authenticate(this.state.userSelect);

        console.debug('Authenticating:', lightdm.in_authentication);
        this.setState({authenticating: lightdm.in_authentication});
    }
    defaultAvatar() {
        this.setState({avatarSrc: DefaultAvatar});
    }
    getUserByName(name) {
        for (let user of lightdm.users) {
            if (user.name === name)
                return user;
        }
        return false;
    }
    getSessionByName(name) {
        for (let session of lightdm.sessions) {
            if (session.name === name)
                return session;
        }
        return false;
    }
    show_prompt(text, type) {
        console.debug('GREETER:show_prompt', type, text);
        if (type === 'password') {
            console.debug('Responding with password.');
            lightdm.respond(this.state.password || '');
        }
    }
    show_message(text, type) {
        console.debug('GREETER:show_message', type, text);
        if (text === 'Invalid password')
            this.authentication_complete();
    }
    authentication_complete() {
        if (lightdm.is_authenticated) {
            let _self = this;
            lightdm.login(lightdm.authentication_user, _self.props.settings.sessionKey);
        } else {
            this.setState({
                password: '', passwordError: "Incorrect password",
                passwordStyle: {},
                authenticating: lightdm.in_authentication
            });
            document.getElementById('password-input').focus();
        }
    }
    componentDidMount() {
        // If user exists in lightdm then set avatar to user's image, otherwise
        // display default avatar
        let user = this.getUserByName(this.state.userSelect);
        if (user) {
            this.setState({
                avatarSrc: 'file:///' + user.image
            });
        } else {
            this.defaultAvatar();
        }
    }
    render() {
        return (
            <form className="login-box" onSubmit={this.login.bind(this)}>
                <img className="image-profile" src={this.state.avatarSrc} alt="User Profile"/>
                <Selector items={users} defaultIndex={this.state.userSelectIndex} callback={this.changeUserName} />
                <Selector items={sessions} defaultIndex={this.state.sessionSelectIndex} callback={this.changesessionKey}/>
                <input  className="input-password"
                    placeholder="Enter your password"
                    type="password"
                    style={{border: this.state.passwordStyle.borderColor ? this.state.passwordStyle.border : ''}}
                    onChange={this.updatePassword}/>
                <button
                    disabled={this.state.authenticating}
                    type="submit">Login</button>
            </form>
        );
    }
}

export default LoginBox;
