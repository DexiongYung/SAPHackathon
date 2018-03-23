import React, {Component} from 'react';
import Classes from './LeaderboardTable.css';
import LeaderboardPlayer from '../LeaderboardPlayer/LeaderboardPlayer';
import * as firebase from 'firebase';

export default class LeaderboardTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			updateListener: false
		};
		this.listenChange = this.listenChange.bind(this);
		this.populatePlayers = this.populatePlayers.bind(this);

		this.database = firebase.database();

		this.listenChange();
	}

	listenChange() {
		const usersRef = this.database.ref('Users');
		usersRef.on('value', function(snapshot) {
			this.setState({updateListener: !this.state.updateListener});
		}.bind(this));
	}

	populatePlayers() {
		const usersRef = this.database.ref('Users');
		let userComponents;
		usersRef.once('value', function(snapshot) {
			const usersList = snapshot.val();
			debugger
			userComponents = Object.keys(usersList).map((userKey, i) => {
				debugger
				// Random status
				var status = Math.floor(Math.random() + 0.5);
				if (i == 0) {
					status = "1";
				}
				return <LeaderboardPlayer key={i} rank={i+1} status={status.toString()}>{usersList[userKey].username}</LeaderboardPlayer>
			}, this);
		}.bind(this));
		return userComponents
	}

	render() {
		return (
			<ul className={Classes.LeaderboardTable}>
		        {this.populatePlayers()}
		    </ul>
		)
	}
}