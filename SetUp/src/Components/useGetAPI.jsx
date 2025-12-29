import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'

function useGetAPI() {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        const ax = async () => {
            try {
                const res = await axios.get(
                    "https://jsonplaceholder.typicode.com/users"
                );
                setUsers(res.data);
                console.log(res.data);
            } catch (err) {
                setError(err);
                console.log("Error fetching data:", err.message);
            }
        };
        ax();
    }, []);
    return (
        {users, error}
    )
}

export default useGetAPI