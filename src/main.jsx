import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from "./routers";
import "./assets/css/tailwind.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)