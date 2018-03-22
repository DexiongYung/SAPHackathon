import React from 'react';
import classes from './NavigationItem.css'

export class NavigationItem extends React.Component {
	constructor(props) {
		super(props)
		this.onClick = this.onClick.bind(this)
	}

	onClick(e) {
		this.props.onClick(this.props.children);
	}

	render() {
		return (
			<li className={classes.NavigationItem}>
	        <a
	          	onClick={this.onClick}
	            className={this.props.active
	            ? classes.active
	            : null}>{this.props.children}</a>
	    	</li>
    	)
	}
}
