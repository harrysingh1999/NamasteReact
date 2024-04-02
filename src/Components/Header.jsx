import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const getUser = async () => {
      let response = await fetch("https://api.github.com/users/harrysingh1999");
      let data = await response.json();
      setFetchedData(data);
    };
    getUser();
  }, []);

  return (
    <>
    <p className="text-center text-2xl m-10">Name: {fetchedData.name}</p>
      <ul className="flex m-10 justify-evenly">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/ContactUs">
          <li>Contact Us</li>
        </NavLink>
        <NavLink to="/ContextComp">
          <li>Context Component</li>
        </NavLink>
        <NavLink to="/OptimiztionHooks">
          <li> Optimization Hooks</li>
        </NavLink>
      </ul>
      <h1 className="text-4xl text-center font-semibold">This is Heading where app Components are listed</h1>
      <div>

      </div>
    </>
  );
}