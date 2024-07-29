import React, { useRef, useEffect } from 'react';
import './Dashboard.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { BiMessageAlt } from "react-icons/bi";
const BookingRate = () => {
  

    // Register components
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

    //charts gradient color function
    const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const ctx = chart.ctx;

      // Define gradients
      const gradientBlue = ctx.createLinearGradient(0, 0, 0, 400);
      gradientBlue.addColorStop(0, '#0041E7');
      gradientBlue.addColorStop(1, '#2A3F74');

      const gradientGreen = ctx.createLinearGradient(0, 0, 0, 400);
      gradientGreen.addColorStop(0, '#00A500');
      gradientGreen.addColorStop(1, '#008200');

      // Apply gradients
      chart.data.datasets[0].backgroundColor = [
        gradientBlue,
        gradientBlue,
        gradientBlue,
        gradientBlue,
        gradientGreen, // Special color for the fifth bar
        gradientBlue,
        gradientBlue
      ];
      chart.update();
    }
  }, []);

    // booking chart
const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Booking Rate',
        data: [4, 2, 4, 4, 8, 2, 4], // Your data values
        // backgroundColor: ['linear-gradient(180deg, #0041E7 0%, #2A3F74 100%)', 'linear-gradient(180deg, #0041E7 0%, #2A3F74 100%)', 'linear-gradient(180deg, #0041E7 0%, #2A3F74 100%)', 'linear-gradient(180deg, #0041E7 0%, #2A3F74 100%)', 'linear-gradient(180deg, #00A500 0%, #008200 100%)', 'linear-gradient(180deg, #0041E7 0%, #2A3F74 100%)', 'linear-gradient(180deg, #0041E7 0%, #2A3F74 100%)'],
        borderRadius: 5,
        borderSkipped: false,

      }, 

    ],
  };
  
  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.raw * 10}%`; // Customize tooltip label
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true, // Start the y-axis at zero
        grid: {
          display: false, // Hide y-axis grid lines
        },
        ticks: {
          font: {
            size: 10, 
            weight: 'bold', // Make the labels bold for better readability
          },
          color: '#272848', // Set the color of y-axis labels
        },
      },
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
        ticks: {
          font: {
            size: 10, 
            weight: 'bold', // Make the labels bold for better readability
          },
          color: '#272848', // Set the color of x-axis labels
        },
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
             <h1 className="booking-number">80%</h1>
             <p className='booking-description'>Your total patient on Friday</p>
             <p className="increase">Your booking rate is 6% increase than previous day</p>
            </div>
            <div className="chart" >
            {/* <div className="icon-with-text">
    <BiMessageAlt className="icon" />
    <span className="icon-text">Text</span>
  </div> */}
            <Bar ref={chartRef} data={data} options={options} />
            </div>
        </div>
    </div>
  )
}

export default BookingRate