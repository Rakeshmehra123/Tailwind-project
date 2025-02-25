import { StrictMode } from 'react'
import * as ReactDOM from "react-dom/client";
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Project from './components/Project/Project.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}/>,
    <Route path='' element={<Home/>}/>,
    <Route path="Project" element={<Project/>}/>
    
  )
)




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout/>
    <RouterProvider router={router} />
  </React.StrictMode>
);