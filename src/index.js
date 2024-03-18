import React from 'react';
import * as ReactDOM from "react-dom/client";
import App from './App';
import LoginSignup from './components/LoginSignup/LoginSignup';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "register",
    element: <LoginSignup/>,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />
);