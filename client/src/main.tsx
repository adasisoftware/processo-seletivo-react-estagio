import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import ErrorPage from './routes/error-page.tsx';
import Homepage from './routes/homepage.tsx';
import PatientsPage from './routes/patients-page.tsx';
import AppointmentsPage from './routes/appointments-page.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/pacientes',
        element: <PatientsPage />,
      },
      {
        path: '/consultas',
        element: <AppointmentsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
