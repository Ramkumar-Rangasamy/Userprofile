import React from 'react'
import './Schedule.css'
import ReactBigCalendar from './ReactBigCalendar';

function Schedule() {
  return (
    <div className="schedule-page">
      <div className="schedule-content">
        <div className="demo-top-component"></div>
        <div className="myschedule">
            <h2 className="schedule-title">My Schedule</h2>
            <div className="allandcal">
                <div className="calender">
                    <ReactBigCalendar/>
                </div>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Schedule