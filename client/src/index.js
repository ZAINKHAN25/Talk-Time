import React from 'react';
import ReactDOM from 'react-dom';
import './styles/taliwand.css';
import LandingPage from './screens/LandingPage.jsx';
import reportWebVitals from "./reportWebVitals.js";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
