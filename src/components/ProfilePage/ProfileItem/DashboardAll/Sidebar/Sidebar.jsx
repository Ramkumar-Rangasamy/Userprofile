import React, { useState, useEffect } from 'react';
import './sidebar.css';
import { FaHome, FaChartBar, FaRegFileAlt, FaBars } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { RiInboxLine } from 'react-icons/ri';
import { TbStar } from 'react-icons/tb';
import { RiCalendarCheckLine } from 'react-icons/ri';
import { ImBlogger2 } from 'react-icons/im';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

import brandLogo from '../Assets/brand-logo.png';

const Sidebar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('/doctorprofile/dashboardpage/start-dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="logo-container">
        {isSidebarOpen ? (
          <>
            <img src={brandLogo} alt="Logo" className="logo" />
            <button className="toggle-button" onClick={toggleSidebar}>
              <FaBars />
            </button>
          </>
        ) : (
          <button className="toggle-button" onClick={toggleSidebar}>
            <FiX />
          </button>
        )}
      </div>
      <ul className="sidebar-menu">
        <li className={`menu-item ${activeItem === '/doctorprofile/dashboardpage/start-dashboard' ? 'active' : ''}`}>
          <Link to="/doctorprofile/dashboardpage/start-dashboard" className="menu-link">
            <div className="sidebar-icon"><FaHome /></div>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/doctorprofile/dashboardpage/manage' ? 'active' : ''}`}>
          <Link to="/doctorprofile/dashboardpage/manage" className="menu-link">
            <div className="sidebar-icon"><RiCalendarCheckLine /></div>
            <span>Appointments</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/doctorprofile/dashboardpage/calender' ? 'active' : ''}`}>
          <Link to="/doctorprofile/dashboardpage/calender" className="menu-link">
            <div className="sidebar-icon"><FaChartBar /></div>
            <span>Calendar</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/doctorprofile/dashboardpage/patient' ? 'active' : ''}`}>
          <Link to="/doctorprofile/dashboardpage/patient" className="menu-link">
            <div className="sidebar-icon"><FaRegFileAlt /></div>
            <span>My Patient</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/doctorprofile/dashboardpage/inbox' ? 'active' : ''}`}>
          <Link to="/doctorprofile/dashboardpage/inbox" className="menu-link">
            <div className="sidebar-icon"><RiInboxLine /></div>
            <span>Inbox</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/doctorprofile/dashboardpage/reviews' ? 'active' : ''}`}>
          <Link to="/doctorprofile/dashboardpage/reviews" className="menu-link">
            <div className="sidebar-icon"><TbStar /></div>
            <span>Reviews</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/doctorprofile/dashboardpage/blog' ? 'active' : ''}`}>
          <Link to="/doctorprofile/dashboardpage/blog" className="menu-link">
            <div className="sidebar-icon"><ImBlogger2 /></div>
            <span>Blog</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/doctorprofile/dashboardpage/other-reports' ? 'active' : ''}`}>
          <Link to="/doctorprofile/dashboardpage/other-reports" className="menu-link">
            <div className="sidebar-icon"><RiLogoutCircleRLine /></div>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
