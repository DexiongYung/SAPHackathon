import React, {Component} from 'react';
import classes from './ReservedConflicts.css';
import Scheduling_Conflicts from '../../assets/images/Scheduling_conflicts.jpg';

class ReservedConflicts extends Component {
	render() {
		return (
			<div className={classes.Formatting}>
			<img className={classes.Toolbar} src={Scheduling_Conflicts}/>
			</div>
		)
	}
}

export default ReservedConflicts