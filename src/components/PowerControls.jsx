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
            {
                window.lightdm.can_shutdown &&
                <PowerButton icon={iconPowerOff} ev={shutdown} alt="Poweroff" />
            }  
            {
                window.lightdm.can_restart &&
                <PowerButton icon={iconReboot} ev={reboot} alt="Reboot" />
            }  
            {
                window.lightdm.can_hibernate &&
                <PowerButton icon={iconHibernate} ev={hibernate} alt="Hibernate" />
            }  
            {
                window.lightdm.can_suspend &&
                <PowerButton icon={iconSleep} ev={sleep} alt="Sleep" />
            }  
        </div>
    );
}

export default PowerControls;
