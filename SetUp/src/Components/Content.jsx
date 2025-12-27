import React from 'react'
import First from './First.jsx'

function Content(props) {
  return (
    <>
      <style>
        {
          `
        .content{
          min-height: 70vh;
          display: flex;
          background-color: #ed5757ff;
          justify-content: center;
            align-items: center;
            font-size: 3rem;}
        `
        }
      </style>
      <div className='content'>Content {props.name}</div>
      <First name={name} age={age} />
    </>
  )
}

export default Content