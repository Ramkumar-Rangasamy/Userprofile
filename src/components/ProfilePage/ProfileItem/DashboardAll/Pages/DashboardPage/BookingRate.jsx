import React from 'react'
import './Dashboard.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
  // Register components
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const BookingRate = () => {
  
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
  )
}

export default BookingRate