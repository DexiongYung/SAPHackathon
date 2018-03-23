import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import {Login} from './components/Login/Login'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      	<div className="App" style={{height: "100%"}}>
        	<Route exact path='/' component={Login} />
        	<Route exact path='/main' component={Layout} />
        </div>
      </Router>
    );
  }
}

export default App;
