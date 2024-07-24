import React, { useState } from 'react';

//imported react-router-dom in NavLink using active chnages and Outlet using right side showing profileItem
import { NavLink, Outlet } from 'react-router-dom';

import ExternalNavLink from './ExternalNavLink/ExternalNavLink';

//Using image aslo and imported
import profileimg from '../../ProfilePage/Assets/profileimg.png';

//imported react-icons
import { FiUser } from "react-icons/fi";
import { MdOutlineInbox } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { LuBell } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";



const languages = [
  { name: 'English', code: 'ENG' },
  { name: 'French', code: 'FRA' },
  { name: 'Spanish', code: 'SPA' },
  { name: 'German', code: 'GER' },
  { name: 'Chinese', code: 'CHN' }
];

const DoctorLayout = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [notificationStatus, setNotificationStatus] = useState('Allow');

  const handleLanguageChange = (e) => {
    const selectedLang = languages.find(lang => lang.code === e.target.value);
    setSelectedLanguage(selectedLang);
  };

  const handleNotificationChange = (e) => {
    setNotificationStatus(e.target.value);
  };

  return (
    <div className='layout-profile'>
      <div className='container'>
        <h1>Doctor Profile</h1>
        <div className="container-profile-head"> 
          <div className="profile-card">
            <div className="profile-content">
              <img src={profileimg} className='profileimg' alt="Profile" />
              <div className='hold-content'>
                <p className="name">Your name</p>
                <p className="email">yourname@gmail.com</p>
              </div>
            </div>
            <nav>
              <ul>
                <li>
                  <NavLink to="edit/profile" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                    <FiUser size='1.2rem' />
                    <span>My Profile</span>
                  </NavLink>
                </li>
                <li>
                  <ExternalNavLink to="/doctorprofile/dashboardpage" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                    <MdOutlineInbox size='1.2rem' />
                    <span>Dashboard</span>
                    <IoIosArrowForward />
                  </ExternalNavLink>
                </li>
                <li>
                  <NavLink to="settings" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                    <IoSettingsOutline size='1.2rem' />
                    <span>Settings</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="notification" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                    <LuBell size='1.2rem' />
                    <span>Notification</span>
                    <select className="dropdown-notification" value={notificationStatus} onChange={handleNotificationChange}>
                      <option value="Allow">Allow</option>
                      <option value="Not Allow">Not Allow</option>
                    </select>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="language" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                    <TbWorld size='1.2rem' />
                    <span>Language</span>
                    <select className="dropdown-language" value={selectedLanguage.code} onChange={handleLanguageChange}>
                      {languages.map((lang, index) => (
                        <option key={index} value={lang.code}>
                          {selectedLanguage.code === lang.code ? lang.code : `${lang.name} `}
                        </option>
                      ))}
                    </select>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="logout" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                    <RiLogoutCircleRLine size='1.2rem' />
                    <span>Log Out</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className='outlet-content'>
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorLayout;