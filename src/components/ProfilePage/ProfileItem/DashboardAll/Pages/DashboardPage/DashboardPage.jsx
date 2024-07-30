import React from 'react'
import './Dashboard.css';
import  reviewsImg from './Assets/reviewsImg.png';
import consultationimg from './Assets/consultationimg.png';
import Tick from './Assets/Tick.png';
import workload from './Assets/workload.png';
import email from './Assets/email.png';
import Dashboardprofile from './Assets/dashboardprofile.png';
import Newpatient from './Assets/Newpatient.png';
import surgery from './Assets/Surgery.png';
import experience from './Assets/Experience.png'; 
import Yourincome from './Yourincome';
import BookingRate from './BookingRate';
import Schedule from './Schedule';


const DashboardPage = () => {

  return (
    <div className='main-dashboard-page'>
      <h1>Dashboard</h1>
      <div className='dashboard-scoll-head'>
        <div className="dashboard-scroll-css">

          {/* insight-patient */}
          <div className="insight-patient">
            <h3>My Insights</h3>
            <div className="insight-item">
              <div className="insight-img blue">
               <img src={Newpatient} className='image-insight'/>
              </div>
              <div className="insight-info">
                <h4>New patient</h4>
                <p>1,500</p>
              </div>
            </div>

            <div className="insight-item">
              <div className="insight-img dark-blue">
              <img src={surgery}  className='image-insight'/>
              </div>
              <div className="insight-info">
                <h4>Surgery</h4>
                <p>1,000</p>
              </div>
            </div>

            <div className="insight-item">
              <div className="insight-img green">
              <img src={experience}  className='image-insight'/>
              </div>
              <div className="insight-info">
                <h4>Experience</h4>
                <p>10+ years</p>
              </div>
            </div>
          </div>

          {/* income */}
          <div className="income-head">
            <Yourincome/>
          </div>

          {/* profile */}
          <div className="profile">
            <img src={Dashboardprofile} className='dashboard-profile'/>
            <h2 className='dashboardprofile-name'>Dr. Jerome Bell</h2>
            <p className='dashboardprofile-subname'>xxxx specialist</p>
            <div className='dashboardprofile-logo'>
              <div className='content-background'>
                <div  className='logo-background'>
                  <img src={workload} className='workload'/>
                  <p className='logo-name'>Total Patients</p>
                  <p className='logo-count'>16 patients</p>
                </div>
              </div>
              <div className='content-background'>
                <div  className='logo-background'>
                  <img src={Tick} className='Tick'/>
                  <p className='logo-name'>Available</p>
                  <p className='logo-count'>22/50</p>
                </div>
              </div>
              <div className='content-background'>
                <div  className='logo-background'>
                  <img src={email} className='email'/>
                  <p className='logo-name'>Messages</p>
                  <p className='logo-count'>24</p>
                </div>
              </div>
            </div>
          </div>

          {/* consultation */}
          <div className="consultation">
            <div className='consultation-area'>
              <div className='consultation-info'>
                <h2 className='consultation-count'>160+</h2>
                <p className='consultation-label'>Consultation</p>
              </div>
              <img src={consultationimg} className='consultation-img' />
            </div>
          </div>


          {/* review area */}
          <div className="reviews">
            <div className='reviews-area'>
              <div className='reviews-info'>
                <h2 className='reviews-count'>250+</h2>
                <p className='reviews-label'>Patient's reviews</p>
              </div>
              <img src={reviewsImg} className='reviews-img' alt="Reviews icon"/>
            </div>
          </div>  


          {/* booking area */}
          <div className="booking-rate">
            <BookingRate/>
          </div>
          
          {/* Schedule */}
          <div className="schedule">
            <Schedule/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default DashboardPage