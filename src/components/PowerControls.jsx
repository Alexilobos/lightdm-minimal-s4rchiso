import React from 'react';
import '../styles/PowerControls.css';
import iconPowerOff from '../assets/action-shutdown.png';
import iconReboot from '../assets/action-reboot.png';
import iconHibernate from '../assets/action-hibernate.png';
import iconSleep from '../assets/action-sleep.png';

import mock from '../utils/mock';
import PowerButton from './PowerButton';


const shutdown = () => window.lightdm.shutdown();
const reboot = () => window.lightdm.restart();
const hibernate = () => window.lightdm.hibernate();
const sleep = () => window.lightdm.suspend();


const PowerControls = () => {
    return (
        <div className="power-box">
            <PowerButton icon={iconPowerOff} ev={shutdown} alt="Poweroff" />
            <PowerButton icon={iconReboot} ev={reboot} alt="Reboot" />
            <PowerButton icon={iconHibernate} ev={hibernate} alt="Hibernate" />
            <PowerButton icon={iconSleep} ev={sleep} alt="Sleep" />
        </div>
    );
}

export default PowerControls;
