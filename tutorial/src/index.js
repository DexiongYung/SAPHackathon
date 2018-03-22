import React from 'react';
import ReactDOM from 'react-dom';
import React, {
    Component
  } from 'react';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    render() { 
        return (
        <div id="sidebar">
        <div className="toggle-btn" onclick="toggleSidebar()">
        <span></span>
        <span></span>
        <span></span>
        </div>
        <ul>
        <li>Events</li>
        <li>Leaderboards</li>
        <li>Reserve Table</li>
        <li>Sign Out</li>
        </ul>
    </div>
    );
    };
}


