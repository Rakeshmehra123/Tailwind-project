import { StrictMode } from 'react'
import {createRoot}from "react-dom/client";
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Project from './components/Project/Project.jsx'


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"Project",
          element:<Project/>
        },
      ]
    }
  ]
)



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);