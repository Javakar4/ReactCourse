// import React from 'react'
// import First from './First.jsx'
// import useGetAPI from './useGetAPI'
// import { useContext } from 'react';
// import { uc } from "../Context/ContextAPI";

// function Content() {
//   // const {users, error} = useGetAPI();
//   // console.log(users[3].username);

//   const {name, age} = useContext(uc);

//   return (
//     <>
//       <style>
//         {
//           `
//         .content{
//           min-height: 70vh;
//           display: flex;
//           background-color: #ed5757ff;
//           justify-content: center;
//             align-items: center;
//             font-size: 3rem;}
//         `
//         }
//       </style>
//       <div className='content'>Content {name} {age}</div>
//       {/* <First name={name} age={age} /> */}
//       {/* <h1>{users[3].username}</h1> */}
//     </>
//   )
// }

// export default Content



import { useContext } from "react";
import { AppContext } from "../Context/ContextAPI";

function Content() {
  const { name, age } = useContext(AppContext);

  return (
    <div className="content">
      Content {name} {age}
    </div>
  );
}

export default Content;
