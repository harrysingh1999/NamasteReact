import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul className="flex m-10 justify-evenly">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/AboutUs">
          <li>About Us</li>
        </NavLink>
        <NavLink to="/ContextComp">
          <li>Context Component</li>
        </NavLink>
        <NavLink to="/OptimiztionHooks">
          <li> Optimization Hooks</li>
        </NavLink>
        {/* <NavLink to="/ComponentBuilding">
          <li> Component Building</li>
        </NavLink> */}
      </ul>

   

    </div>
  );
}