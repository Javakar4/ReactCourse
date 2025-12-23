import React from 'react'
// import { useState } from 'react'

function ListDemo() {
    const fruits = ["Mango", "Mango", "Apple", "Banana", "Grapes"];
    const [text, setText] = React.useState("Click on a fruit to see it here");

    const fruitHandler = (event) => {
        console.log("You clicked on ", event.target.innerText);
        setText(event.target.innerText);
    }

    return (
        <>
            {/* <ul>
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
            <li>Item4</li>
        </ul> */}

            <ul>
                {
                    fruits.map((fruit, index) => (
                        <li key={index} onClick={fruitHandler}>{fruit}</li>
                    ))
                }
            </ul>
            <h1>{text}</h1>
        </>
    )
}

export default ListDemo