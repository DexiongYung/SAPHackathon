import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
	if (props.loginMode) {
		return (
		    <header className={classes.Toolbar}>
		        <Logo/>
		    </header>
		);
	} else {
		return (
		    <header className={classes.Toolbar}>
		        <DrawerToggle clicked={props.drawerToggleClicked}/>
		        <Logo/>
		    </header>
		);
	}
}

export default toolbar