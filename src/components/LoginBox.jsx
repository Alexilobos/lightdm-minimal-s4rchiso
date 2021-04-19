import React, { useState } from 'react';
import '../styles/LoginBox.css';
import Selector from './Selector';

const provide_secret = (e, user, pass) => {
    e.preventDefault()
    let lightdm = window.lightdm;
    if(lightdm._username)
        lightdm.cancel_authentication();
    let selected_user = lightdm.users[user.name].name;
    if(selected_user !== null) {
        lightdm.cancel_timed_login ();
        lightdm.start_authentication(lightdm.users[user.name].name);
    }
    if(pass !== null)
        lightdm.provide_secret(pass);
    if (window.lightdm.is_authenticated)
        window.lightdm.start_session();
    else {
        window.lightdm.cancel_authentication();
        lightdm.authenticate();
    }
}

const searchSession = name => {
    let lightdm = window.lightdm;
    let index = -1;
    for (let i = 0; i < lightdm.sessions.length; i++)
        if (lightdm.sessions[i].name === name){
            index = i;
            break;
        }
    return index;
}

const LoginBox = (props) => {
    let users = [];
    let sessions = [];
    let lightdm = window.lightdm;
    const [iconUser, setIconUser] = useState(props.icon);
    const [pass, setPass] = useState(null);
    lightdm.users.forEach(el => {
        users.push({
            key: el.name,
            name: el.display_name,
            defaultSession: el.session,
            image: el.image
        });
    });
    lightdm.sessions.forEach(el => {
        sessions.push({
            key: el.key,
            name: el.name,
            comment: el.comment
        });
    });
    const [userSelect, setUserSelect] = useState(0);
    const [sessionSelect, setSessionSelect] = useState(0);
    const onChangeUser = index => {
        let newSessionIndex = searchSession(users[index].defaultSession);
        setUserSelect(index);
        setSessionSelect(newSessionIndex);
        let image = users[index].image;
        if (image !== "" && image !== " ")
            setIconUser(image);
        else
            setIconUser(props.icon);
    };
    const onChangeSession = i => {
        setSessionSelect(i);
        lightdm.default_session = sessions[i];
    };
    return (
        <form className="login-box" onSubmit={e => provide_secret.bind(e, userSelect, pass)}>
            <img className="image-profile" src={iconUser} alt="User Profile"/>
            <Selector items={users} defaultIndex={userSelect} callback={onChangeUser} />
            <Selector items={sessions} defaultIndex={sessionSelect} callback={onChangeSession}/>
            <input  className="input-password"
                    placeholder="Enter your password"
                    type="password"
                    onChange={e => setPass(e.target.value)}/>
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginBox;
