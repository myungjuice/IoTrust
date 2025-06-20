import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import RootLayout from '@/layouts/RootLayout';

import HomePage from './Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
