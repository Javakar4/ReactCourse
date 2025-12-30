import React from 'react'
import { useContext } from 'react';
import { AppContext } from "../Context/ContextAPI";

function Demo() {
    const { name, age, setName, setAge } = useContext(AppContext);
    return (
        <>
        <style>
        {
          `
        .demo{
          min-height: 70vh;
          display: flex;
          background-color: #0ac63cff;
          justify-content: center;
            align-items: center;
            font-size: 3rem;}
        `
        }
      </style>

      <div className="demo">
        <h3>{name} {age}</h3>
      </div>
      </>
    )
}

export default Demo