import React from 'react';
import '../styles/Home.css';

import DefaultProfile from '../assets/profile.png';

import LoginBox from '../components/LoginBox';
import PowerControls from '../components/PowerControls.jsx';

const Home = () => {
    return (
        <div className="home-screen">
            <LoginBox icon={DefaultProfile} />
            <PowerControls />
        </div>
    );
}

export default Home;
