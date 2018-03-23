import React, {Component} from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import * as firebase from 'firebase';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Leaderboard from '../../pages/Leaderboard/Leaderboard';
import ReservedConflicts from '../../pages/ReservedConflicts/ReservedConflicts';
import ReserveBoard from '../../pages/ReserveBoard/ReserveBoard';
import Events from '../../pages/Events/Events';

// const pages = ["Home", "MeetUp", "Leaderboard", "Profile", "Events"]

class Layout extends Component {
    constructor(props) {
        super(props);
        this.database = firebase.database();
        this.notifyRef = this
            .database
            .ref('GamesRoom/Notify');
        var initial_value = true;
        var that = this;
        this
            .notifyRef
            .on('value', function (snapshot) {
                var notify = snapshot.val();
                if (notify === true) {
                    var GameRef = that
                        .database
                        .ref('GamesRoom/Game');
                    GameRef.once('value', function(snapshot) {
                        var gameType = snapshot.val();
                        alert("Someone has challenged you to " + gameType + "!");
                    })
                    that
                        .notifyRef
                        .set(false);
                }
            })

        this.state = {
            showSideDrawer: false,
            onPage: "Home"
        };
        this.renderContent = this
            .renderContent
            .bind(this);
    }

    onNavClick = (pageName) => {
        this.setState({onPage: pageName})
    }

    renderContent() {
        switch (this.state.onPage) {
            case "Meet Up":
                return <ReserveBoard/>;
            case "Leaderboard":
                return <Leaderboard/>;
            case "Events":
                return <Events/>
            case "Current Reservations":
                return <ReservedConflicts/>
            default:
                return <Events/>
        }
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            };
        });
    }

    render() {
        return (
            <div>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                    onClick={this.onNavClick}/> {this.renderContent()};
            </div>
        );
    }
}

export default Layout;
