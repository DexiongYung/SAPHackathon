import React from 'react';
import Classes from './LeaderboardTable.css';
import LeaderboardPlayer from '../LeaderboardPlayer/LeaderboardPlayer';


const leaderboardTable = (props) => (
    <ul className={Classes.LeaderboardTable}>
        <LeaderboardPlayer rank="1">Jason Yoo</LeaderboardPlayer>
    </ul>
);

export default leaderboardTable