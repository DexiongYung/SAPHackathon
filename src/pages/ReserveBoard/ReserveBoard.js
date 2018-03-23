import React, {Component} from 'react';
import classes from './ReserveBoard.css';
import LeaderboardToolbar from '../../assets/images/leaderboard_toolbar.png';
import ReserveBoardTableLeft from './ReserveBoardTableLeft/ReserveBoardTableLeft';
import Button from './confirmbutton/confirmbutton'

class ReserveBoard extends Component {
    render() {
        return (
            <div className={classes.ReserveBoard}>
                <img className={classes.Toolbar} src = {LeaderboardToolbar} alt="toolbar" />
                <ReserveBoardTableLeft/>
                <Button/>
            </div>
        );
    }
}

export default ReserveBoard