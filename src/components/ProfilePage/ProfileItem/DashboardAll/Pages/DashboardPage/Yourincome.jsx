import { useEffect, useRef } from 'react';
import './Dashboard.css';
import { Chart } from 'chart.js/auto';

const Yourincome = () => {
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
        maintainAspectRatio: false, // Allow the chart to resize freely
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
              font: {
                size: 10, 
                weight: 'bold', // Make the labels bold for better readability
              },     
              color: '#272848', // Set the color of x-axis labels
              autoSkip: true,

              padding: 5, // Increase padding for more space
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
                size: 10, 
                weight: 'bold', // Make the labels bold for better readability
              },     
              color: '#272848', // Set the color of y-axis labels
              autoSkip: true,

              padding:5, // Increase padding for more space
            },
            beginAtZero: true,
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

  return (
    <div className="income-head">
      <div className="income">
        <h2>Your Income</h2>
        <select className="chart-select">
          <option>Last 5 months</option>
        </select>
      </div>
      <div className='chart-area'>
        <canvas ref={chartRef} id="incomeChart" className='bar-chart'></canvas>
      </div>
    </div>
  );
}

export default Yourincome;
