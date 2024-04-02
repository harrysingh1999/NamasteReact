import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import OptimiztionHooks from "./Components/OptimizationHooks.jsx";
import Optimization from "./Components/Optimization.jsx";
import ContactUs from "./Components/ContactUs.jsx";

// import ContextComp from './Components/ContextComp.jsx'
// import AboutUs from './Components/AboutUs.jsx'

const ContextComp = lazy(() => import("./Components/ContextComp.jsx"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/ContextComp" element={<ContextComp/>} />
      <Route path="/OptimiztionHooks" element={<OptimiztionHooks/>} />
      <Route path="/Optimization" element={<Optimization/>} /> 
    </Route>
  )
);

ReactDOM.createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
     </React.StrictMode>
);