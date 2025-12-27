import React from 'react'
import { useState, useEffect, useRef } from 'react';

function Hooks() {
    // 1. useState  - used to manage state in functional components, without reloading the page
    // 2. useEffect - used to perform side effects in functional components, such as fetching data, updating the DOM, or setting up subscriptions
    // 3. useContext - used to share state and data between components without passing props manually at every level
    // 4. useRef    - used to access and interact with DOM elements directly or to persist values across renders
    // 5. useMemo   - used to optimize performance by memoizing expensive calculations and preventing unnecessary re-computations
    // 6. useCallback - used to memoize functions and prevent unnecessary re-creations of functions on every render
    // 7. useReducer - used to manage complex state logic in functional components, similar to Redux but built into React
    // 8. custom hooks - user-defined functions that encapsulate reusable logic and state management using built-in hooks

    // Object Courses example
    const courses = [
        { id: 1, name: "ReactJS", price: 999 },
        { id: 2, name: "VueJS", price: 899 },
        { id: 3, name: "AngularJS", price: 799 },
    ];
    // useState example
    const [count, setCount] = useState(0);
    const [name, setName] = useState("John Doe");

    // UseEffect example
    useEffect(() => {
        console.log("UseEffect Called....");
    }, [name, count]); // dependency array

    // UseRef example and UseMemo example
    const inputRef = useRef("null");
    const focusInput = () => {
        console.log(inputRef.current.value);
        console.log(inputRef);
    }




    return (
        <>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <h1>{name}</h1>
        <button onClick={() => setName(name + "a")}>Change Name</button>
        <br />
        <input ref={inputRef} type="text" placeholder="Focus me using button" />
        <button onClick={focusInput}>Focus Input</button>
        {/* Is Not Valid
        <h1>{inputRef.current.value}</h1>
        <h1>{courses}</h1> */}
        </>
    )
}

export default Hooks