import React from 'react';
import './Dashboard.css';
import scheduleimg from './Assets/scheduleimg.png';
import  reviewsImg from './Assets/reviewsImg.png';
import consultationimg from './Assets/consultationimg.png';
import Tick from './Assets/Tick.png';
import workload from './Assets/workload.png';
import email from './Assets/email.png';
import Dashboardprofile from './Assets/dashboardprofile.png';
import Newpatient from './Assets/Newpatient.png';
import surgery from './Assets/Surgery.png';
import experience from './Assets/Experience.png';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Chart } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';


const DashboardPage = () => {

  // income chart


  const chartRef = useRef(null);
  const chartInstance = useRef(null); // To store the chart instance

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy the previous chart instance
    }

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mar', 'Apr', 'Jun', 'July', 'August'],
        datasets: [
          {
            label: 'Income',
            data: [5000, 15000, 10000, 20000, 15000],
            backgroundColor: ['#007bff', '#007bff', '#007bff', '#FF5733', '#007bff'],
            borderRadius: 5,
            borderSkipped: false,
          },
        ],
      },
      options: {
        responsive: true,
                maintainAspectRatio: true, // Allow the chart to resize freely

        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: (context) => `$${context.raw.toLocaleString()}`,
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            title: {
              display: true,
            },
            ticks: {
              callback: (value) => `$${value / 1000}k`,
              font: {
                size: 12, 
                width:100,
                weight: 'bold', // Make the labels bold for better readability

              },     
              color: '#272848', // Set the color of y-axis labels
              padding: 0, // Increase padding for more space

            },
          },
          y: {
            grid: {
              display: false,
            },
            title: {
              display: true,
            },
            ticks: {
              callback: (value) => `$${value / 1000}k`,
              font: {
                width:100,
                size: 12, 
                weight: 'bold', // Make the labels bold for better readability

              },     
              color: '#272848', // Set the color of y-axis labels
              padding: 0, // Increase padding for more space

            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Cleanup on component unmount
      }
    };
  }, []);


  // scheduleday function


    const [selectedDay, setSelectedDay] = useState(5); // Default selected day index
  
    const handleDayClick = (index) => {
      setSelectedDay(index);
    };

    // Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



// booking chart
const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Booking Rate',
      data: [4, 2, 4, 4, 8, 2, 4], // Your data values
      backgroundColor: [
        '#8884d8', '#8884d8', '#8884d8', '#8884d8', '#00C49F', '#8884d8', '#8884d8'
      ],
    },
  ],
};

// Chart options
const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          return `${context.raw * 10}%`; // Adjust as necessary
        }
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

  return (
    <div className='main-dashboard-page'>
      <h1>Dashboard</h1>
      <div className='dashboard-scoll-head'>
        <div className="dashboard-scroll-css">
          
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

          <div className="income-head">
      <div className="income">
        <h2>Your Income</h2>
        <select className="chart-select">
          <option>Last 5 months</option>
        </select>
      </div>
      <div className='chart-area'>
      <canvas ref={chartRef} id="incomeChart" className="bar-chart"></canvas>
      </div>
    </div>


          {/* profile */}
          <div className="profile">
          <img src={Dashboardprofile} className='dashboard-profile'/>
            <h2 className='dashboardprofile-name'>Dr. Jerome Bell</h2>
            <p className='dashboardprofile-subname'>xxxx specialist</p>
            <div className='dashboardprofile-logo'>
            <div className='content-background'>
            <div  className='logo-background'><img src={workload} className='workload'/>
            <p className='logo-name'>workload</p>
            <p className='logo-count'>16 patients</p>
            </div>
            </div>
            <div className='content-background'>
            <div  className='logo-background'><img src={Tick} className='Tick'/>
            <p className='logo-name'>Available</p>
            <p className='logo-count'>22/50</p>
            </div>
            </div>
            <div className='content-background'>
            <div  className='logo-background'><img src={email} className='email'/>
            <p className='logo-name'>Email</p>
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
    <div className='consultation-img-container'>
      <img src={consultationimg} className='consultation-img' />
    </div>
  </div>
</div>


{/* review area */}
<div className="reviews">
  <div className='reviews-area'>
    <div className='reviews-info'>
      <h2 className='reviews-count'>250+</h2>
      <p className='reviews-label'>Patient's reviews</p>
    </div>
    <div className='reviews-img-container'>
      <img src={reviewsImg} className='reviews-img' alt="Reviews icon"/>
    </div>
  </div>
</div>


          {/* booking area */}
          
          <div className="booking-rate">
            <div className='booking-header'>
      <h2 className="booking-title">Booking Rate</h2>
      <select className='recently'>
            <option>Recently</option>
          </select>
          </div>
      <div className="booking-area">
        <div className="rate">
          <h1 className="booking-percentage">80%</h1>
          <p>Your total patient on Friday</p>
          <p className="increase">Your booking rate is 6% increase than previous day</p>
        </div>
        <div className="chart" >
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
          


          {/* schedule start */}

          <div className="schedule">
      <div className="schedule-container">
        <div className="schedule-header">
          <h2>My schedule</h2>
          <select className='recently'>
            <option>Recently</option>
          </select>
        </div>
        <div className="calendar">
          {["10 Sun", "11 Mon", "12 Tue", "13 Wed", "14 Thu", "15 Fri", "16 Sat", "17 Sun", "18 Mon", "19 Tue"].map((day, index) => (
            <div 
              key={index} 
              className={`day ${index === selectedDay ? 'selected' : ''}`} 
              onClick={() => handleDayClick(index)}
            >
              {day.split(' ')[0]}<br/><span>{day.split(' ')[1]}</span>
            </div>
          ))}
        </div>
        <div className="schedule-list">
          {[
            { time: "8:00 - 10:00 AM", title: "Consultation", details: "8:00 - 10:00 AM" },
            { time: "11:00 - 11:30 AM", title: "Consultation", details: "8:00 - 10:00 AM" },
            { time: "2:00 - 4:00 PM", title: "Consultation", details: "8:00 - 10:00 AM" }
          ].map((item, index) => (
            <div key={index} className="schedule-item">
              <div className="time">{item.time}</div>
              <div className="details">
                <div className='details-section'>
                  <div><img src={scheduleimg} className='scheduleimg' alt="schedule"/></div>
                  <div>
                    <div className="schedule-title">{item.title}</div>
                    <div className="sub-details"><p>{item.details}</p></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage