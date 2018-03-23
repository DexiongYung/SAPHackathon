import React from 'react';
import Classes from './ReserveBoardTable.css';
//import LeaderboardPlayer from '../LeaderboardPlayer/LeaderboardPlayer';


const reserveboardTable = (props) => (
    <ul className={Classes.ReserveBoardTable}>
        {props.title}
    </ul>
);

export default reserveboardTable