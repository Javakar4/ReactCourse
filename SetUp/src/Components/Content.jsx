import React from 'react'
import First from './First.jsx'
import useGetAPI from './useGetAPI'
import { useContext } from 'react';
import { AppContext } from "../Context/ContextAPI";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Content() {
  // const {users, error} = useGetAPI();
  // console.log(users[3].username);
  const navigate = useNavigate();

  const { name, age, setName, setAge, isLogin, setIsLogin } = useContext(AppContext);

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
      <div className='content'>
        {/* <Link to="/contact/form">Contact</Link>
        <Link to="/home/users">Users</Link> */}
        {/* Button Navigation */}
        <button onClick={()=>navigate("/form")}>Form</button>
        {isLogin && <h3>Content {name} {age}</h3>}
        {isLogin ? <button onClick={() => { setName("Button Clicked") }}>Click</button> :<button onClick={() => { setIsLogin(true) }}>Login</button>}
      </div>
      {/* <First name={name} age={age} /> */}
      {/* <h1>{users[3].username}</h1> */}
    </>
  )
}

export default Content
