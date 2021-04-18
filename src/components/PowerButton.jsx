import React from 'react';
import PropTypes from 'prop-types';
import '../styles/PowerButton.css';

const PowerButton = (props) => {
    return (
        <img className="power-button" src={props.icon} alt={props.alt} onClick={props.ev} />
    );
}

PowerButton.propTypes = {
    icon: PropTypes.string.isRequired,
    ev: PropTypes.any.isRequired,
    alt: PropTypes.string.isRequired
}

export default PowerButton;
