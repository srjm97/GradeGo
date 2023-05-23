import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import StudDashboardLayout from './layouts/studdashboard'
import SimpleLayout from './layouts/simple';
import AttendanceSetting from './pages/AttendanceSetting';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import DashboardAppPage from './pages/DashboardAppPage';
import TimeTable from './pages/TimeTable';
import StudDashboardAppPage from './pages/StudDashboardAppPage';
import StudAttendance from './pages/StudAttendance';
import Attendance from './pages/Attendance';
import StudTimeTable from './pages/StudTimeTable';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'attendance', element: <Attendance />},
        { path: 'attendance-setting', element: <AttendanceSetting /> },
        { path: 'timetable', element:<TimeTable />}
      ],
    },
    {
      path: '/studdashboard',
      element: <StudDashboardLayout />,
      children: [
        { element: <Navigate to="/studdashboard/app" />, index: true },
        { path: 'app', element: <StudDashboardAppPage /> },
        { path: 'attendance', element: <StudAttendance /> },
        { path: 'timetable', element:<StudTimeTable />}
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/login" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
