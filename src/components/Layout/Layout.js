import React, {Component} from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Leaderboard from '../../pages/Leaderboard/Leaderboard';

// const pages = ["Home", "MeetUp", "Leaderboard", "Profile", "Events"]

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSideDrawer: false,
            onPage: "Home"
        };
        this.renderContent = this.renderContent.bind(this);
    }

    onNavClick = (pageName) => {
        this.setState({onPage: pageName})
    }

    renderContent() {
        switch (this.state.onPage) {
            case "Profile":
                //return <Profile />
            case "MeetUp":
                //return <MeetUp />
            case "Leaderboard":
                return <Leaderboard />;
            case "Events":
                //return <Events />
            default:
                //return <Home />
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
                    onClick={this.onNavClick}
                    />
                {this.renderContent()};
            </div>
        );
    }
}

export default Layout;
