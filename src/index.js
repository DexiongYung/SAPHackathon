import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var config = {
	apiKey: "AIzaSyDA6gDStXBBOWRRJeka065wZX4PX7mecmk",
	authDomain: "sap-game-jam.firebaseapp.com",
	databaseURL: "https://sap-game-jam.firebaseio.com",
	projectId: "sap-game-jam",
	storageBucket: "",
	messagingSenderId: "832046294936"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
