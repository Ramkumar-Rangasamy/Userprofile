import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../Layouts/Layout';
import ManageAppointment from '../Pages/ManageAppointment/ManageAppointment';
import Booking from '../Pages/Booking/Booking';

const ConnectedRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/dashboard" element={<Layout />}>
        <Route index element={<Navigate to="manage" />} />
        <Route path="manage" element={<ManageAppointment />} />
        <Route path="booking" element={<Booking />} />
        {/* Add more nested routes here */}
      </Route>
    </Routes>
  );
}

export default ConnectedRoutes;
