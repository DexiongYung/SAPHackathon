import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Events</NavigationItem>
        <NavigationItem link="/">Leaderboards</NavigationItem>
        <NavigationItem link="/">Reserve Table</NavigationItem>
        <NavigationItem link="/">Sign Out</NavigationItem>
    </ul>
);
//!!!TODO link should go to respective pages
export default navigationItems;