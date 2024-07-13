import React from 'react';
import ReactDOM from 'react-dom';
import './styles/taliwand.css';
import reportWebVitals from "./reportWebVitals.js";

import LandingPage from './screens/LandingPage.jsx';
import PublicMeetsPage from './screens/PublicMeetsPage.jsx';
import JoinPublicMeetPage from './screens/JoinPublicMeetPage.jsx';
import JoinPrivateMeetPage from './screens/JoinPrivateMeetPage.jsx';
import PublicMeet from './screens/PublicMeet.jsx';
import NotFoundPage from './screens/NotFoundPage.jsx';

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
  {
    path: "/join-meet",
    element: <JoinPublicMeetPage />,
  },
  {
    path: "/private-meet",
    element: <JoinPrivateMeetPage />,
  },
  {
    path: "/public/:meetId",
    element: <PublicMeet />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
