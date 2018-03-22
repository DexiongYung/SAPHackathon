import React from 'react';
import classes from './NavigationItems.css';
import { NavigationItem } from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem onClick={props.onClick}>Profile</NavigationItem>
        <NavigationItem onClick={props.onClick}>MeetUp</NavigationItem>
        <NavigationItem onClick={props.onClick}>Leaderboards</NavigationItem>
        <NavigationItem onClick={props.onClick}>Events</NavigationItem>
        <NavigationItem onClick={props.onClick}>Sign Out</NavigationItem>
    </ul>
);
//!!!TODO link should go to respective pages
export default navigationItems;