import React from 'react';
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
      <style>{`
        .nav {
          height: 20vh;
          background-color: #333;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }
      `}</style>

      <div className="nav">
        <ul style={{listStyle:"none", display:"flex", gap:"20PX"}}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/form">Form</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
