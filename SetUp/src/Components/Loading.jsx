import React from 'react'

function Loading() {
    return (
        <>
            <style>{`
        .load {
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          width: 100vw;
          background-color: #0f0e0e37;
          color: red;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }
      `}</style>
            <div className='load'>Loading.......</div>
        </>
    )
}

export default Loading