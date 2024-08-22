import { useAuthenticatedFetch } from '@shopify/app-bridge-react'
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export function TopBar() {
  let fetch = useAuthenticatedFetch();
  let [storeName, setStoreName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/store/info", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        // Check if the response is ok
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();
        setStoreName(data.data[0].name); // Adjust based on your actual data structure
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [fetch]);

  return (
    <div className='topbar-section'>
      <div className="logo-block">
        <img className='logo' src="../assets/logo.png" alt="logo image" />
        <h1 className='text-bold h4'>{storeName}</h1>
        <NavLink to="/"> Sales </NavLink>
        <NavLink to="/products"> Products </NavLink>
      </div>
    </div>
  )
}
