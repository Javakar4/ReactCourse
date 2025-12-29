import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import useGetAPI from './useGetAPI'

function User() {
    // Fetch  - User Data from API - In-Built
    // Axios - User Data from API - External Library

    // Promise - Object representing the eventual completion or failure of an asynchronous operation

    // const [users, setUsers] = useState([])
    // const [error, setError] = useState(null)
    // Syntax for Fetch
    // async and await

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(res => {res.json()})
    //         .then(data => setUsers(data))
    //         .catch(err => {
    //             setError(err);
    //             console.log("Error fetching data:", err.message);
    //         });
    // }, [])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //             const data = await res.json();
    //             setUsers(data);
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
    //                 "https://jsonplaceholder.typicode.com/users"
    //             );
    //             setUsers(res.data);     // <-- actual user data
    //             console.log(res.data);
    //         } catch (err) {
    //             setError(err);
    //             console.log("Error fetching data:", err.message);
    //         }
    //     };

    //     ax();
    // }, []);

    // Custom Hook Implementation
    const {users, error} = useGetAPI();



    return (
        <>
            {error ? (
                <h2 style={{ color: 'red' }}>Error fetching data: {error.message}</h2>
            ) : (
                <div>
                    <h1>Users</h1>
                    {users.map(user => (
                        <div key={user.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                            <h2>{user.name}</h2>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                            <p>Website: {user.website}</p>
                            <p>Address: {user.address.city}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default User

// {users.map(user => (
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