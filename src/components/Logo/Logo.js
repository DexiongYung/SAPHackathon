import React from 'react';
import gamejamLogo from '../../assets/images/gamejam-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className = {classes.Logo}>
        <img src = {gamejamLogo} alt="Game Jam" />
    </div>
);

export default logo;