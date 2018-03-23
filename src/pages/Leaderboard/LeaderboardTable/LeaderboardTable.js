import React from 'react';
import Classes from './LeaderboardTable.css';
import LeaderboardPlayer from '../LeaderboardPlayer/LeaderboardPlayer';


const leaderboardTable = (props) => (
    <ul className={Classes.LeaderboardTable}>
        <LeaderboardPlayer rank="1" status="1">Jason Yoo</LeaderboardPlayer>
        <LeaderboardPlayer rank="2" status="0">Justin Yoon</LeaderboardPlayer>
        <LeaderboardPlayer rank="3" status="0">Pablo SoftVoice-chan</LeaderboardPlayer>
    </ul>
);

export default leaderboardTable