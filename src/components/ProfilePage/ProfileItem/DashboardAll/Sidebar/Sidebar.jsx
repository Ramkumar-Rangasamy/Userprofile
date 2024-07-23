
import React, { useState, useEffect } from 'react';
import './sidebar.css';
import { FaHome, FaChartBar, FaList, FaRegFileAlt,FaBars } from 'react-icons/fa';
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
        <li className={`menu-item ${activeItem === '/admin/dashboard/dashboard-profile' ? 'active' : ''}`} 
            onMouseEnter={() => setActiveItem('/admin/dashboard/dashboard-profile')}
            onMouseLeave={() => setActiveItem(location.pathname)}
        >
          <Link to="/admin/dashboard/dashboard-profile" className="menu-link">
            <div className="sidebar-icon"><FaHome /></div>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/admin/dashboard/statistics' ? 'active' : ''}`} 
            onMouseEnter={() => setActiveItem('/admin/dashboard/statistics')}
            onMouseLeave={() => setActiveItem(location.pathname)}
        >
          <Link to="/admin/dashboard/statistics" className="menu-link">
            <div className="sidebar-icon"><FaChartBar /></div>
            <span>Statistics</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/admin/dashboard/inbox' ? 'active' : ''}`} 
            onMouseEnter={() => setActiveItem('/admin/dashboard/inbox')}
            onMouseLeave={() => setActiveItem(location.pathname)}
        >
          <Link to="/admin/dashboard/inbox" className="menu-link">
            <div className="sidebar-icon"><RiInboxLine /></div>
            <span>Inbox</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/admin/dashboard/listings' ? 'active' : ''}`} 
            onMouseEnter={() => setActiveItem('/admin/dashboard/listings')}
            onMouseLeave={() => setActiveItem(location.pathname)}
        >
          <Link to="/admin/dashboard/listings" className="menu-link">
            <div className="sidebar-icon"><FaList /></div>
            <span>Listings</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/admin/dashboard/reviews' ? 'active' : ''}`} 
            onMouseEnter={() => setActiveItem('/admin/dashboard/reviews')}
            onMouseLeave={() => setActiveItem(location.pathname)}
        >
          <Link to="/admin/dashboard/reviews" className="menu-link">
            <div className="sidebar-icon"><TbStar /></div>
            <span>Reviews</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/admin/dashboard/reports' ? 'active' : ''}`} 
            onMouseEnter={() => setActiveItem('/admin/dashboard/reports')}
            onMouseLeave={() => setActiveItem(location.pathname)}
        >
          <Link to="/admin/dashboard/reports" className="menu-link">
            <div className="sidebar-icon"><FaRegFileAlt /></div>
            <span>Reports</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/admin/dashboard/booking' ? 'active' : ''}`} 
            onMouseEnter={() => setActiveItem('/admin/dashboard/booking')}
            onMouseLeave={() => setActiveItem(location.pathname)}
        >
          <Link to="/admin/dashboard/booking" className="menu-link">
            <div className="sidebar-icon"><PiNotebook /></div>
            <span>Bookings</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/admin/dashboard/manage' ? 'active' : ''}`} 
            onMouseEnter={() => setActiveItem('/admin/dashboard/manage')}
            onMouseLeave={() => setActiveItem(location.pathname)}
        >
          <Link to="/admin/dashboard/manage" className="menu-link">
            <div className="sidebar-icon"><RiCalendarCheckLine /></div>
            <span>Appointments</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/admin/dashboard/announcements' ? 'active' : ''}`} 
            onMouseEnter={() => setActiveItem('/admin/dashboard/announcements')}
            onMouseLeave={() => setActiveItem(location.pathname)}
        >
          <Link to="/admin/dashboard/announcements" className="menu-link">
            <div className="sidebar-icon"><AiOutlineNotification /></div>
            <span>Announcements</span>
          </Link>
        </li>
        <li className={`menu-item ${activeItem === '/admin/dashboard/other-reports' ? 'active' : ''}`} 
            onMouseEnter={() => setActiveItem('/admin/dashboard/other-reports')}
            onMouseLeave={() => setActiveItem(location.pathname)}
        >
          <Link to="/admin/dashboard/other-reports" className="menu-link">
            <div className="sidebar-icon"><FaRegFileAlt /></div>
            <span>Other Reports</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;