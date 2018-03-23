import React, {Component} from 'react';
import Classes from './LeaderboardPlayer.css';
import RankUp from '../../../assets/images/up-arrow.png';
import RankDown from '../../../assets/images/down-arrow.png';

class LeaderboardPlayer extends Component {
    source = this.props.status === "1"
        ? RankUp
        : RankDown

    render() {
        return <li className={Classes.LeaderboardPlayer}>
            <a className={Classes.NameRank}>{this.props.rank}. {this.props.children}</a>
            <a className={Classes.Logo}><img src={this.source} alt="RankStatus"/></a>
            <a className={Classes.Profile}>Profile</a>
            <a className={Classes.Challenge}>Challenge</a>
        </li>
    };
}

export default LeaderboardPlayer