import React from 'react'
import './Dashboard.css'
import Newpatient from './Assets/Newpatient.png';
import surgery from './Assets/Surgery.png';
import experience from './Assets/Experience.png';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const DashboardPage = () => {
  const data = {
    labels: ['Mar', 'Apr', 'Jun', 'July', 'August'],
    datasets: [
      {
        label: 'Income',
        data: [0, 5, 10, 15,20],
        backgroundColor: ['#007bff', '#007bff', '#007bff', '#FF5733', '#007bff'],
      },
    ],
  };

  const options = {
    responsive: true,
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
      },
      y: {
        grid: {
          display: false,
        },
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
            <div className='income'>
              <h2>Your Income</h2>
              <select className="chart-select">
                <option>Last 5 months</option>
              </select>
            </div>
            <Bar data={data} options={options} className='bar-chart' />
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage