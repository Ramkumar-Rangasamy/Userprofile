import React, { useState } from 'react';

//imported react-router-dom in Link and Outlet using right side showing profileItem
import { Link, Outlet } from 'react-router-dom';

//style.css
import './profilelayout.css';

//Using image aslo and imported
import profileimg from '../Assets/userprofile.jpeg'

//imported react-icons
import { BsCardHeading } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { MdOutlineInbox } from "react-icons/md";
import { LiaFileAltSolid } from "react-icons/lia";
import { FaRegStar } from "react-icons/fa";
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

const ProfileLayout = () => {
  
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
        <h1>User Profile</h1>
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
                  <BsCardHeading size='1.2rem' />
                  <Link to="manage-appointments">Manage Appointments</Link>
                </li>
                <li>
                  <FiUser size='1.2rem' />
                  <Link to="my-profile">My Profile</Link>
                </li>
                <li>
                  <MdOutlineInbox size='1.2rem' />
                  <Link to="inbox">Inbox</Link>
                  <IoIosArrowForward />
                </li>
                <li>
                  <LiaFileAltSolid size='1.2rem' />
                  <Link to="prescriptions">Prescriptions</Link>
                  <IoIosArrowForward />
                </li>
                <li>
                  <FaRegStar size='1.2rem' />
                  <Link to="reviews">Reviews</Link>
                  <IoIosArrowForward />
                </li>
                <li>
                  <IoSettingsOutline size='1.2rem' />
                  <Link to="settings">Settings</Link>
                </li>
                <li>
                  <LuBell size='1.2rem' />
                  <Link to="notification">Notification</Link>
                  <select className="dropdown-notification" value={notificationStatus} onChange={handleNotificationChange}>
                    <option value="Allow">Allow</option>
                    <option value="Not Allow">Not Allow</option>
                  </select>
                </li>
                <li>
                  <TbWorld size='1.2rem' />
                  <Link to="language">Language</Link>
                  <select className="dropdown" value={selectedLanguage.code} onChange={handleLanguageChange}>
                    {languages.map((lang, index) => (
                      <option key={index} value={lang.code}>
                        {selectedLanguage.code === lang.code ? lang.code : `${lang.name} `}
                      </option>
                    ))}
                  </select>
                </li>
                <li>
                  <RiLogoutCircleRLine size='1.2rem' />
                  <Link to="/logout">Log Out</Link>
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

export default ProfileLayout;
