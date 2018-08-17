import React, { Component } from 'react';

import './Calendar.css';

class Calendar extends Component {

  render() {
    return (
      <div className="calendar-view">
        <iframe src="https://calendar.google.com/calendar/b/1/embed?title=Calendar&amp;showNav=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=89uhvp3v9i1bpa2fkoante50mis64bni%40import.calendar.google.com&amp;color=%23711616&amp;ctz=America%2FChicago" width="80%" height="95%" title="calendar" frameBorder="0" scrolling="no" className="calendar-full"/>
        <iframe src="https://calendar.google.com/calendar/b/1/embed?mode=AGENDA&amp;title=Calendar&amp;showNav=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=89uhvp3v9i1bpa2fkoante50mis64bni%40import.calendar.google.com&amp;color=%23711616&amp;ctz=America%2FChicago" width="100%" height="100%" title="calendar" frameBorder="0" scrolling="no" className="calendar-mobile"/>
      </div>
    );
  }
}

export default Calendar;
