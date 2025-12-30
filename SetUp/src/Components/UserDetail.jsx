import React from 'react'
import { useParams } from "react-router-dom";
import useGetAPI from './useGetAPI'


function UserDetail() {
    const { id } = useParams();
    const {data, error} = useGetAPI(`https://jsonplaceholder.typicode.com/users/${id}`);
    console.log(data);
    
    return (
        <>
        <h1>{data.name}</h1>
        <h1>{data.email}</h1>
        <h1>{data.id}</h1>
        </>
    )
}

export default UserDetail