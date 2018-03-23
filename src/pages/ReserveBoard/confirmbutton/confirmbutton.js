import React from 'react';
import Classes from './confirmbutton.css';
//import LeaderboardPlayer from '../LeaderboardPlayer/LeaderboardPlayer';


const reserveboardTable = (props) => (
    <ul className={Classes.confirmbutton}>
        {props.title}
    </ul>
);

export default reserveboardTable