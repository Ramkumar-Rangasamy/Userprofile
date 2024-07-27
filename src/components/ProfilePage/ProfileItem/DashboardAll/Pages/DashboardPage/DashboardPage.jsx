import React from 'react'
import './Dashboard.css';

const DashboardPage = () => {
  return (
    <div className='main-dashboard-page'>
      <h1>Dashboard</h1>
      <div className='dashboard-scoll-head'>
      <div className="dashboard-scroll-css">
        <div className="incoming-patient">
          <h2>Incoming Patient</h2>
          <div>New patient: 1,500</div>
          <div>Surgery: 1,000</div>
          <div>Experience: 10+ years</div>
          <div>Experience: 10+ years</div>
          <div>Experience: 10+ years</div>
          <div>Experience: 10+ years</div>
          <div>Experience: 10+ years</div>
        </div>
        <div className="income">
          <h2>Your Income</h2>
          <div>Total Income: ₹10,00,000</div>
          <div>Expenses: ₹1,20,000</div>
        </div>  
        <div className="profile">
          <h2>Dr. Jerome Bell</h2>
          <p>xxxx specialist</p>
          <div>Workload: 19 patients</div>
          <div>Available: 20/50</div>
          <div>Email: 24</div>
        </div>
        <div className="consultation">
          <h2>160+ Consultation</h2>
        </div>
        <div className="reviews">
          <h2>250+ Patient's reviews</h2>
        </div>
        <div className="booking-rate">
          <h2>Booking Rate</h2>
          <div>80%</div>
          <div>Your total patient on Friday</div>
        </div>
        <div className="schedule">
          <h2>My Schedule</h2>
          <div>...</div> {/* Schedule items */}
        </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage