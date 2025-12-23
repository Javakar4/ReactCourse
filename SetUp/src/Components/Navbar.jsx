import React from 'react';

function Navbar() {
  return (
    <>
      <style>{`
        .nav {
          height: 10vh;
          background-color: #333;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }
      `}</style>

      <div className="nav">Navbar</div>
    </>
  );
}

export default Navbar;
