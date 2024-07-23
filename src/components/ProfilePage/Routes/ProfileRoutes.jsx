import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './profileroutes.css'; // Ensure this file exists
import ManageAppointments from '../ProfileItem/ManageAppointments/ManageAppointments';
import Profileedit from '../ProfileItem/ProfileEdit/Profileedit';
import Inbox from '../ProfileItem/Inbox/Inbox';
import Prescriptions from '../ProfileItem/Prescriptions/Prescriptions';
import Reviews from '../ProfileItem/Reviews/Reviews';
import Settings from '../ProfileItem/Settings/Settings';
import Notification from '../ProfileItem/Notification/Notification';
import Language from '../ProfileItem/Language/Language';
import ProfileLayout from '../Layout/ProfileLayout';
import DoctorLayout from '../Layout/DoctorLayout';
import ConnectedRoutes from '../ProfileItem/DashboardAll/ConnectedRoutes/ConnectedRoutes';

const ProfileRoutes = () => {
  return (
    <div className='profile-content-background-color'>
      <Routes>
        <Route path="/userprofile" element={<ProfileLayout />}>
          <Route index element={<Navigate to="edit/profile" />} />
          <Route path="manage/appointments" element={<ManageAppointments />} />
          <Route path="edit/profile" element={<Profileedit />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="prescription" element={<Prescriptions />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="settings" element={<Settings />} />
          <Route path="notification" element={<Notification />} />
          <Route path="language" element={<Language />} />
        </Route>
        <Route path="/doctorprofile" element={<DoctorLayout />}>
          <Route index element={<Navigate to="edit/profile" />} />
          <Route path="edit/profile" element={<Profileedit />} />
          <Route path="dashboardpage" element={<ConnectedRoutes />} />
          <Route path="settings" element={<Settings />} />
          <Route path="notification" element={<Notification />} />
          <Route path="language" element={<Language />} />
        </Route>
      </Routes>
    </div>
  );
};

export default ProfileRoutes;
