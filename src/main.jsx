import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import Work from '/src/pages/Work/Work';
import Home from "/src/pages/Home";
import ErrorPage from "/src/pages/Error/ErrorPage";
import About from './pages/About/About';
import Layout from './components/Layout/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "work/:id",
        element: <Work />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
