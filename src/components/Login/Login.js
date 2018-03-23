import React, {Component} from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Login.css';
import * as firebase from 'firebase';

export class Login extends Component {

	constructor(props) {
		super(props);
		this.auth = firebase.auth();
		this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
		this.signIn = this.signIn.bind(this);
	}

	onAuthStateChanged(user) {
		if (user) {
			window.location.replace(window.location.href + "main");
		}
	}

	signIn() {
		var provider = new firebase.auth.GoogleAuthProvider();
  		this.auth.signInWithPopup(provider);
	}

	render() {
		const fadedDarkWhite = 'rgba(175, 175, 175, 0.5)';
		return (
			<div style={{height: "inherit"}}>
				<Toolbar loginMode={true}/>
				<div className={classes.bg}>
					<div className={classes.welcomeBox} onClick={this.signIn}>
						<p>Please sign in the use the benefits!</p>
						<h1>Click to Sign In!</h1>
					</div>
				</div>
			</div>
		)
	}
}