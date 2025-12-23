import React from 'react'

function Footer() {
  return (
    <>
    <style>
      {
        `
      .footer{
        height: 20vh;
        display: flex;
        background-color: #222222ff;
        justify-content: center;
          align-items: center;
          font-size: 3rem;
          color: white;
      }
      `
      }
    </style>
    <div className='footer'>Footer</div>
    </>
  )
}

export default Footer