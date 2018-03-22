import React from 'react';
import classes from './LeaderboardPlayer.css';

const leaderboardplayer = (props) => (
    <li className={classes.LeaderboardPlayer}>
        <a>{props.rank}</a>
        <a>{props.children}</a>
    </li>
);

export default leaderboardplayer