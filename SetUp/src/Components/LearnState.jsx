import React from 'react'
import { useState, useEffect } from 'react'

function LearnState() {
    // const [objectState, setObjectState] = React.useState({
    //     name: 'John',
    //     age: 30,
    //     city: 'New York'
    // })
    // console.log(objectState);
    const [arr, setArr] = React.useState([10, 20, 30, 40, 50, 30]);
    const [sum, setSum] = React.useState(0);
    // const id = 30;

    const updateArray = () => {
        const newArr = arr.map((item) => {
            if (item === 50) {
                return 60;
            } else {
                return item;
            }
        });
        setArr(newArr);
    }

    const filterArray = () => {
        const filteredArr = arr.filter((item) => item !== 30);
        setArr(filteredArr);
    }

    const reduceArray = () => {
        const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        console.log(sum);
        setSum(sum);
    }

    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count + 1);
    }
    useEffect(() => {
        console.log('Count has been updated to:', count);
    }, [count]);

    // const id = setInterval(() => {
    //     console.log('Interval running');
    // }, 1000);
    // Stop the interval when the component unmounts
    // useEffect(() => {
    //     return () => {
    //         clearInterval(id);
    //         console.log('Interval cleared');
    //     }
    // }, []);

    // To create an infinite loop (not recommended in practice)
    // while(true){
    //     console.log('Name');
    // }

    return (
        <>
            {/* <h1>{objectState.name}</h1>
        <h1>{objectState.age}</h1>
        <h1>{objectState.city}</h1>
        <button onClick={() => setObjectState({...objectState, age: 31})}>Increase Age</button> */}



            {/* <h1>Array Elements</h1>
        {arr.map((item, index) => (
            <h2 key={index}>{item}</h2>
        ))
        } */}
            {/* <button onClick={() => setArr([...arr, 60])}>Add Element</button> */}
            {/* <button onClick={updateArray}>Update Element</button> <br /> */}
            {/* <button onClick={filterArray}>Filter</button> <br /> */}
            {/* <button onClick={() => setArr(arr.filter((item) => item !== 30))}>Filter</button> <br /> */}
            {/* <button onClick={reduceArray}>Sum</button> <br /> */}
            {/* <button onClick={() => setArr(arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0))}>Sum</button> <br /> */}
            {/* {sum == 0 ? null : <h2>Sum: {sum}</h2>} */}
            {/* <h2>{sum}</h2> */}


            <h1 className=''>Count: {count}</h1>
            <button onClick={handleCount}>Increase Count</button>

        </>
    )
}

export default LearnState