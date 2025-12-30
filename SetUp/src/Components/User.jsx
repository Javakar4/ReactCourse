import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import useGetAPI from './useGetAPI'
import UserDetail from './UserDetail'

import { useNavigate } from "react-router-dom";

function User() {
    // Fetch  - User Data from API - In-Built
    // Axios - User Data from API - External Library

    // Promise - Object representing the eventual completion or failure of an asynchronous operation

    // const [datas, setdatas] = useState([])
    // const [error, setError] = useState(null)
    // Syntax for Fetch
    // async and await

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/datas")
    //         .then(res => {res.json()})
    //         .then(data => setdatas(data))
    //         .catch(err => {
    //             setError(err);
    //             console.log("Error fetching data:", err.message);
    //         });
    // }, [])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await fetch("https://jsonplaceholder.typicode.com/datas");
    //             const data = await res.json();
    //             setdatas(data);
    //         } catch (err) {
    //             setError(err);
    //             console.log("Error fetching data:", err.message);
    //         }
    //     };
    //     fetchData();
    // }, []);


    // Axios Example:
    // Types of Methods -> Get, Post, Put, Delete.
    // useEffect(() => {
    //     const ax = async () => {
    //         try {
    //             const res = await axios.get(
    //                 "https://jsonplaceholder.typicode.com/datas"
    //             );
    //             setdatas(res.data);     // <-- actual user data
    //             console.log(res.data);
    //         } catch (err) {
    //             setError(err);
    //             console.log("Error fetching data:", err.message);
    //         }
    //     };

    //     ax();
    // }, []);

    // Custom Hook Implementation
    const {data, error} = useGetAPI("https://jsonplaceholder.typicode.com/users");

    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`/users/${id}`)
    }



    return (
        <>
            {error ? (
                <h2 style={{ color: 'red' }}>Error fetching data: {error.message}</h2>
            ) : (
                <div>
                    <h1>data</h1>
                    {data.map(user => (
                        <div key={user.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                            <h2>{user.name}</h2>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Website: {user.website}</p>
                            <p>Address: {user.address.city}</p>
                            <button className='w-2xs py-1.5 shadow-2xs bg-amber-700 border-8' onClick={() => handleClick(user.id)}>View Detail</button>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default User

// {datas.map(user => (
//     <div key={user.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
//         <h2>{user.name}</h2>
//         <p>Email: {user.email}</p>
//         <p>Phone: {user.phone}</p>
//         <p>Website: {user.website}</p>
//         <p>Address: {user.address.city}</p>
//     </div>
// ))}



// Task
// 1. Fetch user data from API using Fetch and Axios
// 2. Display ToDo list from API
// 3. Handle loading and error states