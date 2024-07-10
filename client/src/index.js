import React from 'react';
import ReactDOM from 'react-dom';
import './styles/taliwand.css';
import reportWebVitals from "./reportWebVitals.js";

import LandingPage from './screens/LandingPage.jsx';
import PublicMeetsPage from './screens/PublicMeetsPage.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/public-meets",
    element: <PublicMeetsPage />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
