import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../Layouts/Layout';
import DashboardPage from '../Pages/DashboardPage/DashboardPage';
import ManageAppointment from '../Pages/ManageAppointment/ManageAppointment';
import Calendar from '../Pages/Calendar/Calendar';
import Patient from '../Pages/Patient/Patient';
import Inbox from '../Pages/Inbox/Inbox';
import Reviews from '../Pages/Reviews/Reviews';
import Blog from '../Pages/Blog/Blog';

const ConnectedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Navigate to="start-dashboard"/>} />
        <Route path="start-dashboard" element={<DashboardPage />} />
        <Route path="manage" element={<ManageAppointment />} />
        <Route path="calender" element={<Calendar />} />
        <Route path="patient" element={<Patient />} />
        <Route path="inbox" element={<Inbox />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  );
};

export default ConnectedRoutes;
