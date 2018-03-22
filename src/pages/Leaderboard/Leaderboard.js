import React, {Component} from 'react';
import classes from './Leaderboard.css';
import LeaderboardToolbar from '../../assets/images/leaderboard_toolbar.png';
import LeaderboardTable from './LeaderboardTable/LeaderboardTable';

class Leaderboard extends Component {
  render() {
    return (
      <div className={classes.Leaderboard}>
          <img className={classes.Toolbar} src = {LeaderboardToolbar} alt="toolbar" />
          <LeaderboardTable/>
      </div>
    );
  }
}

export default Leaderboard;
