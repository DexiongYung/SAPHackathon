import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.navigationItems}>
        <NavigationItem link="/" active>Events</NavigationItem>
        <NavigationItem link="/" active>Leaderboards</NavigationItem>
        <NavigationItem link="/" active>Reserve Table</NavigationItem>
        <NavigationItem link="/" active>Sign Out</NavigationItem>
    </ul>
);
//!!!TODO link should go to login page
export default navigationItems;