import React, {Component} from 'react';
import classes from './ReserveBoard.css';
import LeaderboardToolbar from '../../assets/images/leaderboard_toolbar.png';
import ReserveBoardTableLeft from './ReserveBoardTableLeft/ReserveBoardTableLeft';
import Button from './confirmbutton/confirmbutton'
import * as firebase from 'firebase';

class ReserveBoard extends Component {
	constructor(props) {
		super(props);
		this.populateGame = this.populateGame.bind(this);
		this.populateTime = this.populateTime.bind(this);
		this.submitForm = this.submitForm.bind(this);

		this.auth = firebase.auth();
		this.database = firebase.database();
	}

	populateGame() {
		const games = [
		'Foosball',
		'Ping Pong',
		'Pool'
		];
		const components = games.map((game, i) => {
			return <option key={i}>{game}</option>
		});
		return (
			<select className="form-control" id="sel1">
				{components}
			</select>
		)
	}

	populateTime() {
		const times = [
		'9:00 AM', '9:30 AM',
		'10:00 AM', '10:30 AM',
		'11:00 AM', '11:30 AM',
		'12:00 PM', '12:30 PM',
		'1:00 PM', '1:30 PM',
		'2:00 PM', '2:30 PM',
		'3:00 PM', '3:30 PM',
		'4:00 PM', '4:30 PM',
		'5:00 PM', '5:30 PM',
		'6:00 PM', '6:30 PM',
		'7:00 PM', '7:30 PM',
		'8:00 PM', '8:30 PM',
		];
		const components = times.map((time, i) => {
			return <option key={i}>{time}</option>
		});
		return (
			<select className="form-control" id="sel2">
				{components}
			</select>
		)
	}

	submitForm() {
		const gameType = document.getElementById('sel1');
		const timeRange = document.getElementById('sel2');
		if (!!gameType && !!timeRange) {
			const userName = this.auth.currentUser.displayName;
			const timesRef = this.database.ref('Times');
			timesRef.once('value', function(snapshot) {
				const timeValue = timeRange.value
				if (snapshot.hasChild(timeValue)) {
					const prevNum = snapshot.val()[timeValue];
					timesRef.child(timeValue).set(prevNum + 1);
				}
			});
		}
		// For Demo Purpose Only
		const gamesRoomRef = this.database.ref('GamesRoom');
		gamesRoomRef.set({
			"Game": gameType.value + "-" + timeRange.value,
			"Notify": true
		});
	}

    render() {
    	const sidePadding = {paddingLeft: 15, paddingRight: 15};
        return (
            <div className={classes.ReserveBoard}>
                <img className={classes.Toolbar} src = {LeaderboardToolbar} alt="toolbar" />
                <div className="form-group" style={sidePadding}>
				  <label htmlFor="sel1">
				  	<h2>
				  		Please choose the game you're interested in:
				  	</h2>
				  </label>
				  {this.populateGame()}
				  <label htmlFor="sel2">
				  	<h2>
				  		Please choose the time you wish to play the game:
				  	</h2>
				  </label>
				  {this.populateTime()}
				  <button type="button" className="btn btn-primary btn-lg pull-right" onClick={this.submitForm}>
				  	Submit Answer
				  </button>
				</div>
            </div>
        );
    }
}

export default ReserveBoard