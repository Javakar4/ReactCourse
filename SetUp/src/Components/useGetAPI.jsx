import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'

function useGetAPI(url) {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        const ax = async () => {
            try {
                const res = await axios.get(url);
                setData(res.data);
                console.log(res.data);
            } catch (err) {
                setError(err);
                console.log("Error fetching data:", err.message);
            }
        };
        ax();
    }, []);
    return (
        {data, error}
    )
}

export default useGetAPI