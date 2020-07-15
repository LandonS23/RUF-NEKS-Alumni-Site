import React, { Component } from 'react';

import './Calendar.css';

class Calendar extends Component {

  render() {
    return (
      <div className="calendar-view">
        <iframe src="https://calendar.google.com/calendar/embed?src=rufneksalumni%40gmail.com&amp;title=RUF/NEKS%20Alumni%20Association%20Calendar&amp;showNav=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=89uhvp3v9i1bpa2fkoante50mis64bni%40import.calendar.google.com&amp;color=%23711616&amp;ctz=America%2FChicago" width="80%" height="95%" title="RUF/NEKS Alumni Association Calendar" frameBorder="0" scrolling="no" className="calendar-full"></iframe>
        <iframe src="https://calendar.google.com/calendar/b/1/embed?mode=AGENDA&amp;title=RUF/NEKS%20Alumni%20Association%20Calendar&amp;showNav=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=rufneksalumni%40gmail.com&amp;color=%23711616&amp;ctz=America%2FChicago" width="100%" height="100%" title="RUF/NEKS Alumni Association Calendar" frameBorder="0" scrolling="no" className="calendar-mobile"/>
      </div>
    );
  }
}

export default Calendar;
