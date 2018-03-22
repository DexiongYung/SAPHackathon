import React from 'react';
import sapLogo from '../../assets/images/sap-logo.jpg';
import classes from './Logo.css';

const logo = (props) => (
    <div className = {classes.Logo}>
        <img src = {sapLogo} alt="SAP" />
    </div>
);

export default logo;