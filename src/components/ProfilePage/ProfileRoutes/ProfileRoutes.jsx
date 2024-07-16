import React from 'react';

//style.css
import './profileroutes.css'

//We use Routes and Route in rect-router-dom
import { Routes, Route } from 'react-router-dom'

//All ProfileItem imported and Routed
import ProfileLayout from '../ProfileLayout/ProfileLayout'
import  ManageAppointments   from '../ProfileItem/ManageAppointments/ManageAppointments'
import Profileedit from '../ProfileItem/ProfileEdit/Profileedit'
import Inbox from '../ProfileItem/Inbox/Inbox'
import Prescriptions  from '../ProfileItem/Prescriptions/Prescriptions'
import Reviews from '../ProfileItem/Reviews/Reviews'
import Settings from '../ProfileItem/Settings/Settings'
import Notification from '../ProfileItem/Notification/Notification'
import Language from '../ProfileItem/Language/Language'


const ProfileRoutes = () => {
  return (
    <div className='profile-content-background-color'>
      <Routes>
        <Route path="/Userprofile" element={<ProfileLayout/>}>
          <Route path="manage-appointments" index element={<ManageAppointments/>} />
          <Route path="my-profile" element={<Profileedit/>} />
          <Route path="inbox" element={<Inbox/>} />
          <Route path="prescriptions" element={<Prescriptions />} />
          <Route path="reviews" element={<Reviews/>} />
          <Route path="settings" element={<Settings />} />
          <Route path="notification" element={<Notification />} />
          <Route path="language" element={<Language />} />
        </Route>
      </Routes>
    </div>
  );
};

export default ProfileRoutes;
