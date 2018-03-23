import React, {Component} from 'react';
import Classes from './Events.css';
import event1 from '../../assets/images/event1.jpeg';
import event2 from '../../assets/images/event2.png';
import event3 from '../../assets/images/event3.png';
import event4 from '../../assets/images/event4.png';

class Events extends Component {
  render() {
    return (
      <div className={Classes.Events}>
      	  	<img className={Classes.EventImg} src = {event1} alt="First Event" />
      	  	<div className={Classes.EmptyDiv}> </div>
      	  	<img className={Classes.EventImg} src = {event2} alt="Second Event" />
      	  	<div className={Classes.EmptyDiv}> </div>
      	  	<img className={Classes.EventImg} src = {event4} alt="Third Event" />
      </div>
    );
  }
}
export default Events;