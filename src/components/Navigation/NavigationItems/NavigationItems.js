import React from 'react';
import classes from './NavigationItems.css';
import { NavigationItem } from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem onClick={props.onClick}>Events</NavigationItem>
        <NavigationItem onClick={props.onClick}>Meet Up</NavigationItem>
        <NavigationItem onClick={props.onClick}>Leaderboard</NavigationItem>
        <NavigationItem onClick={props.onClick}>Current Reservations</NavigationItem>
        <NavigationItem onClick={props.onClick}>Sign Out</NavigationItem>
    </ul>
);
export default navigationItems;