import React from 'react';
import Classes from './LeaderboardPlayer.css';
import RankUp from '../../../assets/images/up-arrow.png';
import RankDown from '../../../assets/images/down-arrow.png';

const leaderboardplayer = (props) => (
    <li className={Classes.LeaderboardPlayer}>
        <a className={Classes.NameRank}>{props.rank}.{props.children}</a>
        <a className={Classes.Logo}><img src = {RankUp} alt="RankStatus" /></a>
        <a className={Classes.Profile}>Profile</a>
        <a className={Classes.Challenge}>Challenge</a>
    </li>
);

export default leaderboardplayer