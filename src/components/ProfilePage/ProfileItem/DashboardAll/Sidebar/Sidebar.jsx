import React, { useState, useEffect } from 'react';
import './sidebar.css';
import { FaHome, FaChartBar, FaList, FaRegFileAlt, FaBars } from 'react-icons/fa';
import { FiX } from "react-icons/fi";
import { RiInboxLine } from "react-icons/ri";
import { TbStar } from "react-icons/tb";
import { PiNotebook } from "react-icons/pi";
import { RiCalendarCheckLine } from "react-icons/ri";
import { AiOutlineNotification } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import brandLogo from '../Assets/brand-logo.png';

const Sidebar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);
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
        <li className={`menu-item ${activeItem === '/dashboard-profile' ? 'active' : ''}`}>
          <Link to="/dashboard-profile" className="menu-link">
            <div className="sidebar-icon"><FaHome /></div>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/statistics' ? 'active' : ''}`}>
          <Link to="/statistics" className="menu-link">
            <div className="sidebar-icon"><FaChartBar /></div>
            <span>Statistics</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/inbox' ? 'active' : ''}`}>
          <Link to="/inbox" className="menu-link">
            <div className="sidebar-icon"><RiInboxLine /></div>
            <span>Inbox</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/listings' ? 'active' : ''}`}>
          <Link to="/listings" className="menu-link">
            <div className="sidebar-icon"><FaList /></div>
            <span>Listings</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/reviews' ? 'active' : ''}`}>
          <Link to="/reviews" className="menu-link">
            <div className="sidebar-icon"><TbStar /></div>
            <span>Reviews</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/reports' ? 'active' : ''}`}>
          <Link to="/reports" className="menu-link">
            <div className="sidebar-icon"><FaRegFileAlt /></div>
            <span>Reports</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/booking' ? 'active' : ''}`}>
          <Link to="/booking" className="menu-link">
            <div className="sidebar-icon"><PiNotebook /></div>
            <span>Bookings</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/doctorprofile/dashboardpage/manage' ? 'active' : ''}`}>
          <Link to="/doctorprofile/dashboardpage/manage" className="menu-link">
            <div className="sidebar-icon"><RiCalendarCheckLine /></div>
            <span>Appointments</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/announcements' ? 'active' : ''}`}>
          <Link to="/announcements" className="menu-link">
            <div className="sidebar-icon"><AiOutlineNotification /></div>
            <span>Announcements</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/other-reports' ? 'active' : ''}`}>
          <Link to="/other-reports" className="menu-link">
            <div className="sidebar-icon"><FaRegFileAlt /></div>
            <span>Other Reports</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
